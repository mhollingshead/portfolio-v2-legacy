const multiplyMatrices = (m1, m2) => m1.map((r, i) => m2[0].map((_, j) => r.reduce((acc, _, n) => acc + m1[i][n] * m2[n][j], 0)));
const toMatrix = v => v.map(p => [p]);
const toVector = m => m.map(r => r[0]);
const getProjectionMatrix = (d1, d2, s) => 
    new Array(d2).fill(new Array(d1).fill(0)).map((r, i) => r.map((_, j) => (j === i) ? s : 0));

const project = (v, d, s) => toVector(multiplyMatrices(getProjectionMatrix(v.length, d, s), toMatrix(v)));
const getRotationMatrix = (n, a, fix) => new Array(n).fill(new Array(n).fill(0)).map((r, i) => 
    r.map((_, j) => 
        (j === fix && i === fix) ? Math.cos(a) : (j === fix + 1 && i === fix) ? -Math.sin(a) :
        (j === fix && i === fix + 1) ? Math.sin(a) : (j === fix + 1 && i === fix + 1) ? Math.cos(a) : 
        (i === j) ? 1 : 0
    )
);

/**
 * Returns an array of length-n vertices whose values are determined by the boundingCoordinates
 * @param {number} n the dimension of the vertices that will be generated.
 * @param {[number, number]} boundingCoordinates the coordinate values that vertices will be populated with.
 * @return {[[number]]} A 2^n-length array of n-length coordinates that represent an n-demensional hypercube.
 */
 const generateVertices = (n, boundingCoordinates) => {
    if (n === 0) {
        // The 0-dimensional hypercube (or point) is represented by a singular point with no coordinate value.
        return [[]]
    } else if (n === 1) {
        // The 1-dimensional hypercube (or edge) is represented by the two bounding coordinates.
        return boundingCoordinates.map(value => value);
    } else {
        // All other dimensions can be represented by all n-length combinations of the bounding coordinates.
        return new Array(n).fill(boundingCoordinates).reduce((a, b) => a.reduce((r, v) => r.concat(b.map(w => [].concat(v, w))), []));
    }
}

/**
 * Determines whether or not an array of vertices form an m-facet (or m-dimensional face) by comparing their Hamming distances.
 * @param {[[number]]} vertices an array of vertices (coordinate arrays) to compare.
 * @param {number} m the dimension of the facet to be checked for - if all vertices differ by only m bits, they form an m-dimensional facet.
 * @return {boolean} true if the verticies form an m-dimensional facet (differing bits === m), false otherwise.
 */
 const formsFacet = (vertices, m) => {
    let differingBits = 0;
    // check each bit in the vertices
    for (let bit = 0; bit < vertices[0].length; bit++) {
        // recursively compare the current bit for pairs of vertices to determine bit equality accross all vertices.
        const compareBit = (vertices) => { 
            // our base case - the function compares pairs of vertices so if only one remains, equality has been confirmed.
            if (vertices.length === 1) {
                return true;
            }
            // if two bits differ, we don't need to continue.
            if (vertices[0][bit] !== vertices[1][bit]) {
                return false;
            // otherwise, remove the first vertex and check the next pair of vertices.
            } else {
                const nextPair = compareBit(vertices.slice(1, vertices.length));
                return nextPair;
            }
        }
        differingBits += !compareBit(vertices);
        // vertices only form an m-dimensional facet if differingBits === m, so if differingBits > m, we can stop checking.
        if (differingBits > m) {
            return false;
        }
    }
    // our facet condition
    if (differingBits === m) {
        return true;
    } else {
        return false;
    }
}

/**
 * Returns the m-facets (or m-dimensional faces) of an n-dimensional Hypercube
 * @param {number} m the dimension of the facets to be generated
 * @param {Hypercube} hypercube the n-dimensional hypercube whose facets will be generated.
 * @return {[[[number]]]} an array of 2^m-length facet arrays of n-length coordinates (the collection of coordinates that make up each facet).
 */
const generateFacets = (m, hypercube) => {
    if (m > hypercube.dimension) {
        // n-dimensional hypercubes can't contain higher dimensional facets.
        return [];
    } else if (m === hypercube.dimension) {
        // n-dimensional hypercubes contain only one n-dimensional facet (itself).
        return [hypercube.vertices];
    } else {
        const facets = [];
        // recursively generate 2^m-length combinations of the hypercube's vertices.
        const buildCombinations = (l, r) => {             
            // vertices make up an m-facet when exactly m bits of their binary representation differ.
            // we can check this condition while we build combinations to avoid wasting time on non-facets.
            if (r.length > 2**(m-1) && !formsFacet(r, m)) return;          
            // if the bitmap conditions pass and the combination is the required length, then it is indeed a facet.
            if (r.length === 2**m) facets.push(r);          
            // continue building combinations.
            const ll = l.slice();
            while (ll.length) {
                buildCombinations(ll, r.concat(ll.shift()));
            }
        }
        buildCombinations(hypercube.bitmap.map(vertex => [vertex]), [])
        
        return facets;
    }
}

export class Hypercube {
    /**
     * Returns an n-dimensional hypercube with vertices dictated by 2 coordinate bounds.
     * @param {number|Hypercube} n the dimension of the hypercube. 0 by default (the 0-cube, or 'point'). Alternatively, a Hypercube object can be supplied to the constructor to create a copy.
     * @param {[number, number]} boundingCoordinates the coordinate values of the hypercube. [-1, 1] by default (centered about the origin).
     * @return {Hypercube} an n-dimensional Hypercube object.
     */
    constructor(n = 0, boundingCoordinates = [-1, 1]) {
        if (n instanceof Hypercube) {
            // If n is a Hypercube, create a new Hypercube using n's attributes.
            this.dimension = n.dimension;
            this.boundingCoordinates = n.boundingCoordinates;
            this.bitmap = n.bitmap;
            this.vertices = n.vertices;
            this.edges = n.edges;
            this.faces = n.faces;
        } else {
            // Otherwise, create a new Hypercube of dimension n.
            n = parseInt(n);
            if (n > 8) console.warn('Hypercubes of dimension higher than 8 can lead to performance issues.');
            this.dimension = Math.max(n, 0);
            this.boundingCoordinates = boundingCoordinates;
            this.vertices = {};

            // We use bitlabels to access vertices of the hypercube
            this.bitmap = generateVertices(n, ["0", "1"]).map(b => b.join(""));
            this.bitmap.forEach(label => {
                this.vertices[label] = label.split("").map(i => boundingCoordinates[i]);
            });

            this.backup = {...this.vertices};

            this.edgemap = generateFacets(1, this);
            this.facemap = generateFacets(2, this);
        }
    }

    rotate(angle = 0, rotations = [0, 1, 2, 3, 4, 5, 6, 7, 8]) {
        this.bitmap.forEach(label => {
            this.vertices[label] = rotations.reduce((acc, fix) => 
                toVector(
                    multiplyMatrices(
                        getRotationMatrix(this.vertices[label].length, angle, fix), toMatrix(acc)
                    )
                ), this.vertices[label]
            );
        });
        return this;
    }

    reset() {
        this.vertices = {...this.backup};
    }

    projectVector(vector, scalar = 1) {
        if (!vector) return null;
        return [vector[0] * scalar, vector[1] * scalar];
    }
}