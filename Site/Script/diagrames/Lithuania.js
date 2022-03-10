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
        labelText:"{valueY} millions"
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
        value: 2530
      }, {
        year: "1910",
        value: 2850
      }, {
          year: "1920",
          value: 2290
      }, {
          year: "1930",
          value: 2420
      }, {
          year: "1940",
          value: 2460
      }, {
          year: "1950",
          value: 2567
      }, {
          year: "1960",
          value: 2770
      }, {
          year: "1970",
          value: 3137
      }, {
        year: "1980",
        value: 3431
      }, {
        year: "1990",
        value: 3696
      }, {
        year: "2000",
        value: 3502
      }, {
        year: "2010",
        value: 3124
      }, {
        year: "2020",
        value: 2722
      }];
      
      xAxis.data.setAll(data);
      series.data.setAll(data);
      
      
      series.appear(1000);
      chart.appear(1000, 1000);
      
      });