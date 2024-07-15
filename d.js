// Example for D3.js
import * as d3 from 'd3';

useEffect(() => {
    if (data.length) {
        // D3.js chart initialization
        const svg = d3.select('#chartContainer')
            .append('svg')
            .attr('width', 500)
            .attr('height', 500);

        // Example: Create a bar chart
        svg.selectAll('rect')
            .data(data)
            .enter()
            .append('rect')
            .attr('x', (d, i) => i * 30)
            .attr('y', d => 500 - d.intensity)
            .attr('width', 25)
            .attr('height', d => d.intensity)
            .attr('fill', 'blue');
    }
}, [data]);
