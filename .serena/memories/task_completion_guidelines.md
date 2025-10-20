# Task Completion Guidelines

## When Making Changes

### Code Modifications
- Test changes by running both scripts: `node generateJson.js` then `node bench.js`
- Ensure Node.js version compatibility (22, 24, 25)
- Maintain ES module syntax and async patterns
- Preserve performance measurement accuracy

### Data Generation Changes
- If modifying `generateJson.js`, regenerate test data before testing
- Consider impact on benchmark consistency when changing data structure
- Ensure compressed output remains reasonable in size

### Benchmark Changes  
- Verify timing accuracy when modifying `bench.js`
- Test with existing test.json.gz to ensure compatibility
- Consider iteration count impact on measurement precision

## GitHub Actions Integration
- Changes to main scripts will trigger automatic benchmarks
- Manual workflow dispatch available for test data updates
- Ensure commits don't break CI pipeline

## Performance Considerations
- Changes should not significantly impact memory usage patterns
- Maintain streaming approach for large data processing
- Preserve compression for storage efficiency

## No Build Process
- Direct Node.js execution - no compilation needed
- Changes are immediately testable
- No dependency installation required