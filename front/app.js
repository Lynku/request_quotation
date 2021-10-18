function autoCompliter(autocompleteId, resultsId, data){
  const autocomplete = document.getElementById(autocompleteId);
  const resultsHTML = document.getElementById(resultsId);

  autocomplete.oninput = function () {
    let results = [];
    const userInput = this.value;
    resultsHTML.innerHTML = "";
    if (userInput.length > 0) {
      results = getResults(userInput);
      resultsHTML.style.display = "block";
      for (i = 0; i < results.length; i++) {
        resultsHTML.innerHTML += "<li class='list-group-item'>" + results[i] + "</li>";
      }
    }
  };

  function getResults(input) {
    const results = [];
    for (i = 0; i < data.length; i++) {
      if (input === data[i].slice(0, input.length)) {
        results.push(data[i]);
      }
    }
    return results;
  }

  resultsHTML.onclick = function (event) {
    const setValue = event.target.innerText;
    autocomplete.value = setValue;
    this.innerHTML = "";
  };
}

document.addEventListener("alpine:init", () => {
  tinymce.init({selector:'textarea'});
  for (const el of document.querySelectorAll('.tagin')) {
    tagin(el)
  }

  Alpine.data('mainData', () => ({
    message: 'My qotes ❤️',
    qotes: [
      {
        "id": 0,
        "guid": "a570926e-e154-4898-be4e-ce9244deb712",
        "isActive": true,
        "price_hour": 13.48,
        "dev": "Underwood Willis",
        "client": "Exoswitch",
        "project": "@HOMESTEAD",
        "description": "Id eiusmod ex officia exercitation nulla ea est reprehenderit reprehenderit veniam. Elit laboris anim cillum veniam aute est ipsum labore elit veniam ea. Proident est ullamco amet ad sunt incididunt elit cillum.\r\n",
        "date": "22/11/2020",
        "worked_hours": 558,
        "estimated_hours": 809,
        "tags": [
          "excepteur",
          "culpa",
          "commodo"
        ]
      },
      {
        "id": 1,
        "guid": "4408be7c-c29c-48a6-be04-117cafaefb90",
        "isActive": false,
        "price_hour": 18,
        "dev": "Geneva Bennett",
        "client": "Ovation",
        "project": "@CROWN",
        "description": "Ipsum adipisicing do reprehenderit ea. Incididunt velit labore cillum nisi consectetur aliquip. In culpa sint ea ut elit excepteur id. Mollit excepteur consequat aliqua ipsum do exercitation officia pariatur deserunt duis esse. In laboris duis fugiat voluptate exercitation laboris magna ullamco dolore velit duis. Ullamco tempor irure aliquip ullamco commodo qui.\r\n",
        "date": "01/06/2019",
        "worked_hours": 699,
        "estimated_hours": 196,
        "tags": [
          "et",
          "nostrud",
          "anim"
        ]
      },
      {
        "id": 2,
        "guid": "14ccedff-3ee2-47bd-982d-f34e90d1572c",
        "isActive": false,
        "price_hour": 12.71,
        "dev": "Lina Cain",
        "client": "Bluplanet",
        "project": "@TURPIN",
        "description": "Sunt proident aliqua in ea. Veniam qui nostrud magna irure. Ut excepteur magna voluptate aute pariatur ad enim ullamco ut consequat tempor. Sunt amet irure eu est dolore excepteur velit qui occaecat occaecat velit eiusmod. Commodo mollit laboris elit ea incididunt incididunt laboris aliqua nulla. Deserunt duis reprehenderit Lorem magna ullamco voluptate Lorem sunt consectetur ut nostrud.\r\n",
        "date": "09/05/2020",
        "worked_hours": 366,
        "estimated_hours": 526,
        "tags": [
          "ipsum",
          "labore",
          "nisi"
        ]
      },
      {
        "id": 3,
        "guid": "e1458fbe-1b59-4e68-9e3e-25a2ccece9f4",
        "isActive": false,
        "price_hour": 18.74,
        "dev": "Munoz Travis",
        "client": "Veraq",
        "project": "@RIVERTON",
        "description": "Cupidatat non laborum cupidatat nisi ut tempor ipsum anim incididunt est voluptate. Proident sit cupidatat qui ex adipisicing eiusmod tempor sint id velit esse. Dolor esse tempor qui nulla qui cupidatat duis Lorem commodo ipsum aliqua. Consequat dolor cupidatat in magna ipsum et ipsum ullamco officia velit. Magna cillum do enim proident qui proident.\r\n",
        "date": "20/07/2020",
        "worked_hours": 832,
        "estimated_hours": 634,
        "tags": [
          "minim",
          "incididunt",
          "minim"
        ]
      },
      {
        "id": 4,
        "guid": "384358f8-1e0d-4c1c-b79a-e796186e10af",
        "isActive": true,
        "price_hour": 17.53,
        "dev": "Audra Blair",
        "client": "Ultrimax",
        "project": "@VALLONIA",
        "description": "Culpa ullamco dolore exercitation velit sit commodo adipisicing laborum labore cupidatat eiusmod anim eu. Incididunt irure quis eiusmod veniam qui veniam amet qui occaecat mollit. Excepteur in irure eiusmod ex. Ea ipsum cillum ut esse anim elit ullamco commodo anim officia reprehenderit laboris elit. Qui consequat excepteur esse sunt aliqua tempor consectetur excepteur. Occaecat sint culpa sunt ex nisi nisi fugiat non. Eu officia elit qui minim enim sit ullamco laboris incididunt ut laboris et.\r\n",
        "date": "05/12/2019",
        "worked_hours": 282,
        "estimated_hours": 880,
        "tags": [
          "sint",
          "eiusmod",
          "magna"
        ]
      },
      {
        "id": 5,
        "guid": "7a2ad80c-9b24-4b38-afd3-a254eecd4b50",
        "isActive": true,
        "price_hour": 17.28,
        "dev": "Elinor Kidd",
        "client": "Decratex",
        "project": "@WARREN",
        "description": "Adipisicing mollit ea dolor in. Id tempor elit dolore proident. Commodo dolor consectetur adipisicing sunt veniam sint amet.\r\n",
        "date": "03/07/2019",
        "worked_hours": 996,
        "estimated_hours": 722,
        "tags": [
          "incididunt",
          "veniam",
          "duis"
        ]
      }
    ],
    joke: '-',
    showModal: false,
    addNewModal: false,
    addNewQote(){
      var projects = this.qotes.map(function(value) {
        return value.project;
      });
      var clients = this.qotes.map(function(value) {
        return value.client;
      });
      autoCompliter("autocomplete_c", "results_c", clients);
      autoCompliter("autocomplete_p", "results_p", projects)
      this.addNewModal = true;
    },
    openEdit(id){
     this.showModal = true;
    },
    copyShareLink(guid){
      navigator.clipboard.writeText('http:'+window.location.hostname+'/'+guid)
    },
    getJoke(){
      fetch('client.json').then(res => res.json()).then(d => { this.joke = d.joke;});
    }
  }));

});