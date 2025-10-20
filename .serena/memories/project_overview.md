# Project Overview

## Purpose
This is a Node.js performance benchmarking project specifically designed to test JSON.stringify() performance across different Node.js versions (22, 24, 25). The project measures the time it takes to stringify large JSON objects multiple times to evaluate performance characteristics.

## Key Components
- **generateJson.js**: Generates a large test dataset (500,000 JSON objects) and compresses it to test.json.gz
- **bench.js**: Reads the compressed test data and benchmarks JSON.stringify() performance
- **test.json.gz**: The compressed test dataset (auto-generated)

## Project Structure
```
/
├── generateJson.js     # Test data generator
├── bench.js           # Benchmark runner  
├── test.json.gz       # Compressed test data
├── .github/workflows/ # GitHub Actions for CI/CD
│   ├── benchmark.yml      # Runs benchmarks on Node.js 22, 24, 25
│   └── updateTestJson.yml # Updates test data via manual trigger
└── .claude/           # Claude Code configuration
    └── settings.local.json
```

## Architecture
This is a simple performance testing suite with two main workflows:
1. **Data Generation**: Creates large JSON datasets for consistent testing
2. **Benchmarking**: Measures JSON.stringify performance across Node.js versions

The project uses modern Node.js features like ES modules, streaming, and the performance API for accurate measurements.