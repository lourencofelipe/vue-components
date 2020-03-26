module.exports = {
    // Add this distribution if not in a production ambient.
    runtimeCompiler: process.env.NODE_ENV !== 'production'
}