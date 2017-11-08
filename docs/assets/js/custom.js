var pathname = window.location.pathname;
if(pathname == "/hardware") {
  var url = 'https://api.airtable.com/v0/appdLi7I4EWkL1UBl/Inventory?api_key=';
  var key = "keyyjGblNFEtVEZUS";
  var query = url+key;

  fetch(query)
    .then((resp) => resp.json())
    .then((data) => {
      for(var i=0; i<data.records.length; i++) {
        var record = data.records[i].fields;
        $(".hardware-list").append('<li class="hardware-item col-sm-12 col-md-4"><img src= "' + record.Photo[0].url + '"><h2>' + record.Quantity+ "x "+ record.Name + '</h2><a class="url btn btn--primary" href="' + record.Link+'" target="_blank">Find out more</a></li>');
      }
    });
}