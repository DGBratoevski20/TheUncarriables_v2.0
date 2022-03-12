am5.ready(function() {
    
    var root = am5.Root.new("chartdiv");
    
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
    var chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        endAngle: 270
      })
    );
    
    var series = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: "value",
        categoryField: "category",
        endAngle: 270
      })
    );
    
    series.states.create("hidden", {
      endAngle: -90
    });

    series.data.setAll([{
      category: "Lithuania",
      value: 501.9
    }, {
      category: "Czechia",
      value: 301.9
    }, {
      category: "Ireland",
      value: 201.1
    }, {
      category: "Germany",
      value: 165.8
    }, {
      category: "Australia",
      value: 139.9
    }, {
      category: "Austria",
      value: 128.3
    }, {
      category: "UK",
      value: 99
    }]);
    
    series.appear(1000, 100);
    
    });