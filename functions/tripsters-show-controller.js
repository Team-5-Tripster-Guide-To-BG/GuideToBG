const showTripstersInfo = function() {

    const html = function() {
        return ` <div class="row">
                   <div class="col-sm-4">
                       <p class="text-center-name"><strong>Alex</strong></p><br>
                       <a href="#alex-parvanov" data-toggle="collapse">
                           <img src="images/photosTripsters/picture-Alex-male.jpg" class="img-circle " alt="Alex" width="255" height="255">
                       </a>
                       <div id="alex-parvanov" class="collapse">
                           <p>Alex adores Bulgarian seaside.</p>
                           <p>He can tell you stories for the beaches</p>
                           <p>from Durankulak to Silistar.</p>
                       </div>
                   </div>
                   <div class="col-sm-4">
                       <p class="text-center-name"><strong>Alex</strong></p><br>
                       <a href="#alex-petrova" data-toggle="collapse">
                           <img src="images/photosTripsters/picture-Alex-female.jpg" class="img-circle " alt="Alex" width="255" height="255">
                       </a>
                       <div id="alex-petrova" class="collapse">
                           <p>Alex loves hiking.</p>
                           <p>She would love to show you </p>
                           <p>the beautiful Bulgarian mountains.</p>
                       </div>
                   </div>
                   <div class="col-sm-4">
                       <p class="text-center-name"><strong>Sophie</strong></p><br>
                       <a href="#sophie" data-toggle="collapse">
                           <img src="images/photosTripsters/picture-Sophie.jpg" class="img-circle " alt="Sophie" width="255" height="255">
                       </a>
                       <div id="sophie" class="collapse">
                           <p>Sophie loves partying.</p>
                           <p>She can help you discover the night life</p>
                           <p>in the biggest cities and the seaside.</p>
                       </div>
                   </div>
               </div>

`;
    };

    return {
        html
    };
};
