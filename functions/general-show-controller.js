const showGeneralInfo = function() {

    const html = function() {
        return ` <div>
       <h3 class="general-info-more infoPopulationTitle" data-name="infoPopulation"></h3>
       <p class="general-info-more infoPopulation" data-name="infoPopulation"></p>
       <div class="chart-container">
        <canvas id="myChart"></canvas>
        </div>
        <script>var ctx = document.getElementById("myChart");
                var myChart = new Chart(ctx, {
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
            document.getElementById("myChart").innerHTML = myChart;
            </script>
        <h3 class="general-info-more infoHistoryTitle" data-name="infoPopulation"></h3>
       <p class="general-info-more infoHistory" data-name="infoHistory"></p>
    </div>

`;
    };

    return {
        html
    };
};
