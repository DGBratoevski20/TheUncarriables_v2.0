am5.ready(function() {

  var root = am5.Root.new("chartdiv");
  
  root.setThemes([
    am5themes_Animated.new(root)
  ]);
  
  var chart = root.container.children.push(am5xy.XYChart.new(root, {
    panX: true,
    panY: true,
    wheelX: "panX",
    wheelY: "zoomX"
  }));
  
  var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
  cursor.lineY.set("visible", false);
  
  
  var xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
  xRenderer.labels.template.setAll({
    rotation: -90,
    centerY: am5.p50,
    centerX: am5.p100,
    paddingRight: 15
  });
  
  var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
    maxDeviation: 0.3,
    categoryField: "year",
    renderer: xRenderer,
    tooltip: am5.Tooltip.new(root, {})
  }));
  
  var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
    maxDeviation: 0.3,
    renderer: am5xy.AxisRendererY.new(root, {})
  }));
  
  
  var series = chart.series.push(am5xy.ColumnSeries.new(root, {
    name: "Series 1",
    xAxis: xAxis,
    yAxis: yAxis,
    valueYField: "value",
    sequencedInterpolation: true,
    categoryXField: "year",
    tooltip: am5.Tooltip.new(root, {
      labelText:"{valueY} thousands"
    })
  }));
  
  series.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5 });
  series.columns.template.adapters.add("fill", function(fill, target) {
    return chart.get("colors").getIndex(series.columns.indexOf(target));
  });
  
  series.columns.template.adapters.add("stroke", function(stroke, target) {
    return chart.get("colors").getIndex(series.columns.indexOf(target));
  });
  
  
  var data = [{
      year: "1900",
      value: 1268.055
    }, {
      year: "1910",
      value: 1321.098
    }, {
        year: "1921",
        value: 1304.8
    }, {
        year: "1931",
        value: 1397.65
    }, {
        year: "1948",
        value: 1439.8
    }, {
        year: "1952",
        value: 1504.427
    }, {
        year: "1961",
        value: 1591.523	
    }, {
        year: "1971",
        value: 1727.137
    }, {
        year: "1981",
        value: 1891.864
    }, {
        year: "1991",
        value: 1913.355
    }, {
        year: "2002",
        value: 1964.036
    }, {
        year: "2011",
        value: 2050.189
    }, {
        year: "2021",
        value: 2108.977
    }];
    
    xAxis.data.setAll(data);
    series.data.setAll(data);
    
    
    series.appear(1000);
    chart.appear(1000, 1000);
    
    });