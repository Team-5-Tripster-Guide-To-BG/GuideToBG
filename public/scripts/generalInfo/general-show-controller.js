const showGeneralInfo = function() {

    const html = function() {
        return ` <div>
         <div id="population" class="container-fluid">
               <h3 class="general-info-more infoPopulationTitle" data-name="infoPopulation"></h3>
               <p class="general-info-more infoPopulation" data-name="infoPopulation"></p>
               <div class="chart-container">
                <canvas id="populationChart"></canvas>
                </div>
                <script>var ctx = document.getElementById("populationChart");
                        var populationChart = new Chart(ctx, {
                            type: 'line',
                            data: {
                                labels: ["1970", "1980", "1990", "2000", "2010", "2018"],
                                datasets: [{
                                    label: 'Population of Bulgaria throughout the years',
                                    data: [8490000, 8862000, 8718000, 8170000, 7396000, 7053083],
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.3)'
                                    ],
                                    borderColor: [
                                        'rgba(255,99,132,3)'
                                    ],
                                    borderWidth: 2
                                }]
                            },
                            options: {
                                scales: {
                                    yAxes: [{
                                        ticks: {
                                            beginAtZero:false
                                        }
                                    }]
                                }
                            }
                    });
                    document.getElementById("populationChart").innerHTML = populationChart;
                    </script>
         </div>
       <div id="tourism" class="container-fluid">

            <h3 class="general-info-more infoTourismTitle" data-name="infoTourismTitle"></h3>
           <p class="general-info-more infoTourism" data-name="infoTourism"></p>
             <div class="chart-container">
            <canvas id="touristsChart"></canvas>
            </div>
            <script>var ctx = document.getElementById("touristsChart");
                    var touristsChart = new Chart(ctx, {
                        type: 'doughnut',
                        data: {
                            datasets: [{
                                data: [9811, 4522, 20478, 108289],
                                backgroundColor:[
                                'rgba(255,99,132,3)',
                                'rgba(153, 102, 255, 3)',
                                'rgba(255, 206, 86, 3)',
                                'rgba(75, 192, 192, 3)',
                                ],
                                borderColor: [
                                'rgba(255,99,132,1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                                ],
                                borderWidth: 2
                                }],
                            labels: [
                                'Austria',
                                'Belgium',
                                'Germany',
                                'Greece'
                            ]
                        }
                });
                document.getElementById("touristsChart").innerHTML = touristsChart;
                </script>
        </div>
        <div id="history" class="container-fluid">
                <h3 class="general-info-more infoHistoryTitle" data-name="infoHistoryTitle"></h3>
                <p class="general-info-more infoHistory" data-name="infoHistory"></p>
        </div>
    </div>
`;
    };

    return {
        html
    };
};