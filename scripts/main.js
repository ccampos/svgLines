document.addEventListener("DOMContentLoaded", function(event) {
    var body = d3.select('body'),
        svg = body.append('svg'),
        circle1,
        circle2,
        circle3,
        line1,
        line2,
        coords = [],
        circleCombos = [],
        lines = [],
        maxCoord = 450,
        numberOfPoints = 160;

    for (var h = 1; h <= numberOfPoints; h = h + 1) {
        coords.push(Math.floor(Math.random() * maxCoord));
    }

    svg.style('width',maxCoord).style('height',maxCoord);

    addCircleCombos();
    addLines();

    function getMaxOfArray(numArray) {
          return Math.max.apply(null, numArray);
    }

    function addCircleCombos() {
        for (var i = 0; i < coords.length; i = i + 2) {
            circleCombos.push(createEl({el:'circle',cx:coords[i],cy:coords[i + 1]}));
        }
    }

    function addLines() {
        for (var j = 0; j < coords.length - 2; j = j + 2) {
            lines.push(createEl({el:'line',x1:coords[j],y1:coords[j + 1],x2:coords[j + 2],y2:coords[j + 3]}));
        }
    }

    function createEl(_obj) {
        var _el = svg.append(_obj.el);

        if (_obj.el === 'circle') {
            return {
                el: _el.attr('cx', _obj.cx).attr('cy',_obj.cy),
                text: svg.append('text').attr('x',_obj.cx + 15).attr('y',_obj.cy).text(_obj.cx + ', ' + _obj.cy)
            }

        } else if (_obj.el === 'line') {
            return _el.attr('x1',_obj.x1).attr('y1',_obj.y1).attr('x2',_obj.x2).attr('y2',_obj.y2);
        }
    }
});
