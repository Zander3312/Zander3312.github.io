let unitjson = `{
    "adultlist": [
        {
            "name": "Corrin",
            "status": "corrin",
            "origin": "n/a",
            "routes": ["br", "cq", "rev"],
            "others": [],
            "rev_only": []
        },
        {
            "name": "Felicia",
            "status": "female",
            "origin": "either",
            "routes": ["br", "cq", "rev"],
            "others_br": ["Hana"],
            "others_cq": ["Peri", "Flora"],
            "others_rev": ["Hana", "Peri", "Flora"]
        },
        {
            "name": "Jakob",
            "status": "male",
            "origin": "either",
            "routes": ["br", "cq", "rev"],
            "others_br": ["Silas", "Takumi", "Dwyer"],
            "others_cq": ["Silas", "Gunter", "Dwyer"],
            "others_rev": ["Takumi", "Silas", "Dwyer"]
        },
        {
            "name": "Azura",
            "status": "female",
            "origin": "either",
            "routes": ["br", "cq", "rev"],
            "others_br": ["Sakura", "Hinoka", "Shigure"],
            "others_cq": ["Elise", "Shigure"],
            "others_rev": ["Sakura", "Elise", "Hinoka", "Shigure"]
        },
        {
            "name": "Kaze",
            "status": "male",
            "origin": "either",
            "routes": ["br", "cq", "rev"],
            "others_br": ["Silas", "Saizo", "Midori"],
            "others_cq": ["Silas", "Xander", "Midori"],
            "others_rev": ["Saizo", "Silas", "Xander", "Midori"]
        },
        {
            "name": "Silas",
            "status": "male",
            "origin": "either",
            "routes": ["br", "cq", "rev"],
            "others_br": ["Jakob", "Kaze", "Ryoma", "Sophie"],
            "others_cq": ["Jakob", "Kaze", "Sophie"],
            "others_rev": ["Jakob", "Kaze", "Ryoma", "Sophie"]
        },
        {
            "name": "Mozu",
            "status": "female",
            "origin": "either",
            "routes": ["br", "cq", "rev"],
            "others_br": ["Oboro"],
            "others_cq": ["Effie", "Nyx"],
            "others_rev": ["Oboro", "Effie", "Nyx"]
        },
        {
            "name": "Rinkah",
            "status": "female",
            "origin": "hoshido",
            "routes": ["br", "rev"],
            "others": ["Oboro", "Orochi", "Kagero"],
            "rev_only": ["Keaton", "Benny", "Charlotte"]
        },
        {
            "name": "Sakura",
            "status": "female",
            "origin": "hoshido",
            "routes": ["br", "rev"],
            "others": ["Azura", "Hana", "Hinoka"],
            "rev_only": ["Leo", "Xander", "Elise"]
        },
        {
            "name": "Subaki",
            "status": "male",
            "origin": "hoshido",
            "routes": ["br", "rev"],
            "others": ["Azama", "Hinata", "Saizo"],
            "rev_only": ["Selena", "Nyx", "Niles"],
            "child": "Caeldori"
        },
        {
            "name": "Hana",
            "status": "female",
            "origin": "hoshido",
            "routes": ["br", "rev"],
            "others": ["Sakura", "Felicia", "Setsuna"],
            "rev_only": ["Keaton", "Laslow", "Effie"]
        },
        {
            "name": "Saizo",
            "status": "male",
            "origin": "hoshido",
            "routes": ["br", "rev"],
            "others": ["Kaze", "Subaki", "Ryoma"],
            "rev_only": ["Beruka", "Charlotte", "Laslow"],
            "child": "Asugi"
        },
        {
            "name": "Orochi",
            "status": "female",
            "origin": "hoshido",
            "routes": ["br", "rev"],
            "others": ["Rinkah", "Oboro", "Kagero"],
            "rev_only": ["Odin", "Laslow", "Nyx"]
        },
        {
            "name": "Hinoka",
            "status": "female",
            "origin": "hoshido",
            "routes": ["br", "rev"],
            "others": ["Azura", "Sakura", "Setsuna"],
            "rev_only": ["Leo", "Xander", "Camilla"]
        },
        {
            "name": "Azama",
            "status": "male",
            "origin": "hoshido",
            "routes": ["br", "rev"],
            "others": ["Subaki", "Hayato", "Kaden"],
            "rev_only": ["Effie", "Beruka", "Arthur"],
            "child": "Mitama"
        },
        {
            "name": "Setsuna",
            "status": "female",
            "origin": "hoshido",
            "routes": ["br", "rev"],
            "others": ["Hana", "Hinoka", "Kagero"],
            "rev_only": ["Arthur", "Niles", "Selena"]
        },
        {
            "name": "Hayato",
            "status": "male",
            "origin": "hoshido",
            "routes": ["br", "rev"],
            "others": ["Azama", "Kaden"],
            "rev_only": ["Effie", "Nyx", "Fuga"],
            "child": "Rhajat"
        },
        {
            "name": "Oboro",
            "status": "female",
            "origin": "hoshido",
            "routes": ["br", "rev"],
            "others": ["Rinkah", "Orochi", "Mozu"],
            "rev_only": ["Benny", "Niles", "Beruka"]
        },
        {
            "name": "Hinata",
            "status": "male",
            "origin": "hoshido",
            "routes": ["br", "rev"],
            "others": ["Subaki", "Takumi", "Kaden"],
            "rev_only": ["Selena", "Peri", "Odin"],
            "child": "Hisame"
        },
        {
            "name": "Takumi",
            "status": "male",
            "origin": "hoshido",
            "routes": ["br", "rev"],
            "others": ["Jakob", "Hinata", "Ryoma"],
            "rev_only": ["Camilla", "Elise", "Leo"],
            "child": "Kiragi"
        },
        {
            "name": "Kagero",
            "status": "female",
            "origin": "hoshido",
            "routes": ["br", "rev"],
            "others": ["Rinkah", "Orochi", "Setsuna"],
            "rev_only": ["Arthur", "Odin", "Peri"]
        },
        {
            "name": "Reina",
            "status": "corrinsexual",
            "origin": "hoshido",
            "routes": ["br", "rev"],
            "others": [],
            "rev_only": []
        },
        {
            "name": "Kaden",
            "status": "male",
            "origin": "hoshido",
            "routes": ["br", "rev"],
            "others": ["Azama", "Hayato", "Hinata"],
            "rev_only": ["Charlotte", "Peri", "Keaton"],
            "child": "Selkie"
        },
        {
            "name": "Ryoma",
            "status": "male",
            "origin": "hoshido",
            "routes": ["br", "rev"],
            "others": ["Silas", "Saizo", "Takumi"],
            "rev_only": ["Camilla", "Elise", "Xander"],
            "child": "Shiro"
        },
        {
            "name": "Scarlet",
            "status": "corrinsexual",
            "origin": "hoshido",
            "routes": ["br", "rev"],
            "others": [],
            "rev_only": []
        },
        {
            "name": "Elise",
            "status": "female",
            "origin": "nohr",
            "routes": ["cq", "rev"],
            "others": ["Effie", "Camilla", "Azura"],
            "rev_only": ["Takumi", "Ryoma", "Sakura"]
        },
        {
            "name": "Arthur",
            "status": "male",
            "origin": "nohr",
            "routes": ["cq", "rev"],
            "others": ["Niles", "Benny", "Keaton"],
            "rev_only": ["Kagero", "Setsuna", "Azama"],
            "child": "Percy"
        },
        {
            "name": "Effie",
            "status": "female",
            "origin": "nohr",
            "routes": ["cq", "rev"],
            "others": ["Elise", "Nyx", "Mozu"],
            "rev_only": ["Azama", "Hayato", "Hana"]
        },
        {
            "name": "Odin",
            "status": "male",
            "origin": "nohr",
            "routes": ["cq", "rev"],
            "others": ["Niles", "Laslow", "Leo"],
            "rev_only": ["Orochi", "Kagero", "Hinata"],
            "child": "Ophelia"
        },
        {
            "name": "Niles",
            "status": "male",
            "origin": "nohr",
            "routes": ["cq", "rev"],
            "others": ["Arthur", "Odin", "Leo"],
            "rev_only": ["Oboro", "Setsuna", "Subaki"],
            "child": "Nina"
        },
        {
            "name": "Nyx",
            "status": "female",
            "origin": "nohr",
            "routes": ["cq", "rev"],
            "others": ["Effie", "Charlotte", "Mozu"],
            "rev_only": ["Subaki", "Hayato", "Orochi"]
        },
        {
            "name": "Selena",
            "status": "female",
            "origin": "nohr",
            "routes": ["cq", "rev"],
            "others": ["Camilla", "Beruka", "Peri"],
            "rev_only": ["Subaki", "Hinata", "Setsuna"]
        },
        {
            "name": "Beruka",
            "status": "female",
            "origin": "nohr",
            "routes": ["cq", "rev"],
            "others": ["Camilla", "Selena", "Charlotte"],
            "rev_only": ["Saizo", "Azama", "Oboro"]
        },
        {
            "name": "Camilla",
            "status": "female",
            "origin": "nohr",
            "routes": ["cq", "rev"],
            "others": ["Elise", "Selena", "Beruka"],
            "rev_only": ["Takumi", "Xander", "Hinoka"]
        },
        {
            "name": "Peri",
            "status": "female",
            "origin": "nohr",
            "routes": ["cq", "rev"],
            "others": ["Felicia", "Selena", "Charlotte"],
            "rev_only": ["Hinata", "Kaden", "Kagero"]
        },
        {
            "name": "Laslow",
            "status": "male",
            "origin": "nohr",
            "routes": ["cq", "rev"],
            "others": ["Xander", "Odin", "Keaton"],
            "rev_only": ["Hana", "Orochi", "Saizo"],
            "child": "Soleil"
        },
        {
            "name": "Charlotte",
            "status": "female",
            "origin": "nohr",
            "routes": ["cq", "rev"],
            "others": ["Peri", "Beruka", "Nyx"],
            "rev_only": ["Saizo", "Kaden", "Rinkah"]
        },
        {
            "name": "Benny",
            "status": "male",
            "origin": "nohr",
            "routes": ["cq", "rev"],
            "others": ["Arthur", "Keaton"],
            "rev_only": ["Rinkah", "Oboro", "Hayato"],
            "child": "Ignatius"
        },
        {
            "name": "Leo",
            "status": "male",
            "origin": "nohr",
            "routes": ["cq", "rev"],
            "others": ["Xander", "Odin", "Niles"],
            "rev_only": ["Sakura", "Hinoka", "Takumi"],
            "child": "Forrest"
        },
        {
            "name": "Keaton",
            "status": "male",
            "origin": "nohr",
            "routes": ["cq", "rev"],
            "others": ["Arthur", "Laslow", "Benny"],
            "rev_only": ["Rinkah", "Hana", "Kaden"],
            "child": "Velouria"
        },
        {
            "name": "Gunter",
            "status": "corrinsexual",
            "origin": "nohr",
            "routes": ["cq"],
            "others": ["Jakob"],
            "rev_only": []
        },
        {
            "name": "Xander",
            "status": "male",
            "origin": "nohr",
            "routes": ["cq", "rev"],
            "others": ["Laslow", "Leo", "Kaze"],
            "rev_only": ["Sakura", "Hinoka", "Ryoma"],
            "child": "Siegbert"
        },
        {
            "name": "Shura",
            "status": "corrinsexual",
            "origin": "n/a",
            "routes": ["br", "cq", "rev"],
            "others": [],
            "rev_only": []
        },
        {
            "name": "Yukimura",
            "status": "corrinsexual",
            "origin": "hoshido",
            "routes": ["br"],
            "others": [],
            "rev_only": []
        },
        {
            "name": "Izana",
            "status": "corrinsexual",
            "origin": "n/a",
            "routes": ["br", "cq"],
            "others": [],
            "rev_only": []
        },
        {
            "name": "Flora",
            "status": "corrinsexual",
            "origin": "n/a",
            "routes": ["cq", "rev"],
            "others": ["Felicia"],
            "rev_only": []
        },
        {
            "name": "Fuga",
            "status": "corrinsexual",
            "origin": "n/a",
            "routes": ["rev"],
            "others": ["Hayato"],
            "rev_only": []
        },
        {
            "name": "Anna",
            "status": "corrinsexual",
            "origin": "n/a",
            "routes": ["br", "cq", "rev"],
            "others": [],
            "rev_only": []
        }
    ],
    "kidlist": [
        {
            "name": "Kana",
            "status": "kana",
            "origin": "n/a",
            "routes": ["br", "cq", "rev"],
            "others": [],
            "rev_only": []
        },
        {
            "name": "Shigure",
            "status": "shigure",
            "origin": "either",
            "routes": ["br", "cq", "rev"],
            "others_br": ["Hisame"],
            "others_cq": ["Forrest"],
            "others_rev": ["Hisame", "Forrest"]
        },
        {
            "name": "Dwyer",
            "status": "malekid",
            "origin": "either",
            "routes": ["br", "cq", "rev"],
            "others_br": ["Asugi", "Kiragi"],
            "others_cq": ["Percy"],
            "others_rev": ["Kiragi", "Asugi", "Percy"],
            "father": "Jakob"
        },
        {
            "name": "Sophie",
            "status": "femalekid",
            "origin": "either",
            "routes": ["br", "cq", "rev"],
            "others_br": ["Caeldori"],
            "others_cq": ["Soleil", "Velouria"],
            "others_rev": ["Caeldori", "Velouria", "Soleil"],
            "father": "Silas"
        },
        {
            "name": "Midori",
            "status": "femalekid",
            "origin": "either",
            "routes": ["br", "cq", "rev"],
            "others_br": ["Selkie"],
            "others_cq": ["Ophelia"],
            "others_rev": ["Selkie", "Ophelia"],
            "father": "Kaze"
        },
        {
            "name": "Caeldori",
            "status": "femalekid",
            "origin": "hoshido",
            "routes": ["br", "rev"],
            "others": ["Sophie", "Mitama", "Rhajat"],
            "rev_only": ["Nina", "Selena", "Nyx"],
            "father": "Subaki"
        },
        {
            "name": "Asugi",
            "status": "malekid",
            "origin": "hoshido",
            "routes": ["br", "rev"],
            "others": ["Dwyer", "Hisame", "Shiro"],
            "rev_only": ["Ignatius", "Beruka", "Charlotte"],
            "father": "Saizo"
        },
        {
            "name": "Mitama",
            "status": "femalekid",
            "origin": "hoshido",
            "routes": ["br", "rev"],
            "others": ["Caeldori", "Rhajat"],
            "rev_only": ["Soleil", "Beruka", "Effie"],
            "father": "Azama"
        },
        {
            "name": "Rhajat",
            "status": "femalekid",
            "origin": "hoshido",
            "routes": ["br", "rev"],
            "others": ["Caeldori", "Mitama"],
            "rev_only": ["Ophelia", "Nyx", "Effie"],
            "father": "Hayato"
        },
        {
            "name": "Hisame",
            "status": "malekid",
            "origin": "hoshido",
            "routes": ["br", "rev"],
            "others": ["Asugi", "Kiragi"],
            "rev_only": ["Percy", "Selena", "Peri"],
            "father": "Hinata"
        },
        {
            "name": "Kiragi",
            "status": "malekid",
            "origin": "hoshido",
            "routes": ["br", "rev"],
            "others": ["Dwyer", "Hisame", "Shiro"],
            "rev_only": ["Forrest", "Camilla", "Elise"],
            "father": "Takumi"
        },
        {
            "name": "Selkie",
            "status": "femalekid",
            "origin": "hoshido",
            "routes": ["br", "rev"],
            "others": ["Midori", "Rhajat"],
            "rev_only": ["Velouria", "Charlotte", "Peri"],
            "father": "Kaden"
        },
        {
            "name": "Shiro",
            "status": "malekid",
            "origin": "hoshido",
            "routes": ["br", "rev"],
            "others": ["Asugi", "Kiragi"],
            "rev_only": ["Siegbert","Camilla", "Sakura"],
            "father": "Ryoma"
        },
        {
            "name": "Percy",
            "status": "malekid",
            "origin": "nohr",
            "routes": ["cq", "rev"],
            "others": ["Dwyer", "Ignatius"],
            "rev_only": ["Hisame", "Kagero", "Setsuna"],
            "father": "Arthur"
        },
        {
            "name": "Ophelia",
            "status": "femalekid",
            "origin": "nohr",
            "routes": ["cq", "rev"],
            "others": ["Midori", "Soleil"],
            "rev_only": ["Rhajat", "Orochi", "Kagero"],
            "father": "Odin"
        },
        {
            "name": "Nina",
            "status": "femalekid",
            "origin": "nohr",
            "routes": ["cq", "rev"],
            "others": ["Soleil", "Velouria"],
            "rev_only": ["Caeldori", "Oboro", "Setsuna"],
            "father": "Niles"
        },
        {
            "name": "Soleil",
            "status": "femalekid",
            "origin": "nohr",
            "routes": ["cq", "rev"],
            "others": ["Sophie", "Ophelia", "Nina"],
            "rev_only": ["Mitama", "Hana", "Orochi"],
            "father": "Laslow"
        },
        {
            "name": "Ignatius",
            "status": "malekid",
            "origin": "nohr",
            "routes": ["cq", "rev"],
            "others": ["Percy", "Forrest", "Siegbert"],
            "rev_only": ["Asugi", "Rinkah", "Oboro"],
            "father": "Silas"
        },
        {
            "name": "Forrest",
            "status": "malekid",
            "origin": "nohr",
            "routes": ["cq", "rev"],
            "others": ["Ignatius", "Siegbert"],
            "rev_only": ["Kiragi", "Sakura", "Hinoka"],
            "father": "Leo"
        },
        {
            "name": "Velouria",
            "status": "femalekid",
            "origin": "nohr",
            "routes": ["cq", "rev"],
            "others": ["Sophie", "Nina"],
            "rev_only": ["Selkie", "Rinkah", "Hana"],
            "father": "Keaton"
        },
        {
            "name": "Siegbert",
            "status": "malekid",
            "origin": "nohr",
            "routes": ["cq", "rev"],
            "others": ["Ignatius", "Forrest"],
            "rev_only": ["Shiro", "Sakura", "Hinoka"],
            "father": "Xander"
        }
    ]
}`;

let units = JSON.parse(unitjson);
let supports_dict = {};
let lb_body = document.getElementById("lb_body");
document.getElementById("route_select_br").checked = false;
document.getElementById("route_select_cq").checked = false;
document.getElementById("route_select_rev").checked = false;
document.getElementById("route_select_br").disabled = false;
document.getElementById("route_select_cq").disabled = false;
document.getElementById("route_select_rev").disabled = false;
document.getElementById("first_unit_select").disabled = true;
document.getElementById("second_unit_select").disabled = true;
document.getElementById("leaderboard_unit_select").disabled = true;
document.getElementById("1_button").disabled = true;
document.getElementById("2_button").disabled = true;
document.getElementById("3_button").disabled = true;
document.getElementById("4_button").disabled = true;


function addChild(elt_type, inner, elt_id) {
    let child = document.createElement(elt_type); //Prepare value to attach to dropdown list
    child.innerHTML = inner; //Write contents to child
    document.getElementById(elt_id).appendChild(child); //Append HTML
}

function loadFirstUnits(selected_route) {
    document.getElementById("first_unit_select").disabled = false;
    document.getElementById("route_select_br").disabled = true;
    document.getElementById("route_select_cq").disabled = true;
    document.getElementById("route_select_rev").disabled = true;
    for (let i = 0; i < units.adultlist.length; i++) {
        if (units.adultlist[i].routes.includes(selected_route)) {
            addChild('option', units.adultlist[i].name, "first_unit_select");
        }
    }
    for (let i = 0; i < units.kidlist.length; i++) {
        if (units.kidlist[i].routes.includes(selected_route)) {
            addChild('option', units.kidlist[i].name, "first_unit_select");
        }
    }
}

function loadSecondUnits() {
    let route = "";
    if (document.getElementById("route_select_br").checked) {
        route = "br";
    }
    else if (document.getElementById("route_select_cq").checked) {
        route = "cq";
    }
    else {
        route = "rev";
    }
    document.getElementById("second_unit_select").innerHTML = "<option>Second unit</option>";
    let first_unit_name = document.getElementById("first_unit_select").value;
    if (first_unit_name == "First unit") {
        document.getElementById("second_unit_select").disabled = true;
        disableButtons();
        return;
    }
    document.getElementById("second_unit_select").disabled = false;
    let first_unit_index = -1;
    let list_origin = "";
    for (let i = 0; i < units.adultlist.length; i++) {
        if (units.adultlist[i].name == first_unit_name) {
            first_unit_index = i; //really stupid way of getting this but whatever
            list_origin = units.adultlist;
            break;
        }
    }
    if (list_origin == "") {
        for (let i = 0; i < units.kidlist.length; i++) {
            if (units.kidlist[i].name == first_unit_name) {
                first_unit_index = i; //really stupid way of getting this but whatever
                list_origin = units.kidlist;
                break;
            }
        }
    }

    console.log(list_origin);
    let status = list_origin[first_unit_index].status; //used to generalize universal pairings
    let origin = list_origin[first_unit_index].origin;
    let others = list_origin[first_unit_index].others; //non-romantic supports or other oddity supports
    console.log(status);
    switch (status) {
        default:
            alert("Unrecognized unit status; this error should never appear. If you're seeing this, tell Zander his code sucks.");
        case "corrin": //add every other unit on selected route to the list
            for (let i = 1; i < units.adultlist.length; i++) {
                if (units.adultlist[i].routes.includes(route)) {
                    addChild('option', units.adultlist[i].name, "second_unit_select");
                }
            }
            for (let i = 0; i < units.kidlist.length; i++) {
                if (units.kidlist[i].routes.includes(route)) {
                    addChild('option', units.kidlist[i].name, "second_unit_select");
                }
            }
            break;
        case "kana": //add every other unit on selected route to the list
            addChild('option', "Corrin", "second_unit_select");
            for (let i = 1; i < units.kidlist.length; i++) {
                if (units.kidlist[i].routes.includes(route)) {
                    addChild('option', units.kidlist[i].name, "second_unit_select");
                }
            }
            for (let i = 1; i < units.adultlist.length; i++) {
                if (units.adultlist[i].routes.includes(route)) {
                    addChild('option', units.adultlist[i].name, "second_unit_select");
                }
            }
            break;
        case "shigure": //add Corrin, Kana, and Azura, then every male gen 1, then female gen 2 and others
            addChild('option', "Corrin", "second_unit_select");
            addChild('option', "Kana", "second_unit_select");
            for (let i = 1; i < units.kidlist.length; i++) {
                if (units.kidlist[i].status == "femalekid" && units.kidlist[i].routes.includes(route)) {
                    addChild('option', units.kidlist[i].name, "second_unit_select");
                }
            }
            if (route == "br") {
                for (let i = 0; i < units.kidlist[first_unit_index].others_br.length; i++) {
                    addChild('option', units.kidlist[first_unit_index].others_br[i], "second_unit_select");
                }
            }
            else if (route == "cq") {
                for (let i = 0; i < units.kidlist[first_unit_index].others_cq.length; i++) {
                    addChild('option', units.kidlist[first_unit_index].others_cq[i], "second_unit_select");
                }
            }
            else {
                for (let i = 0; i < units.kidlist[first_unit_index].others_rev.length; i++) {
                    addChild('option', units.kidlist[first_unit_index].others_rev[i], "second_unit_select");
                }
            }
            addChild('option', "Azura", "second_unit_select");
            for (let i = 1; i < units.adultlist.length; i++) {
                if (units.adultlist[i].status == "male" && units.adultlist[i].routes.includes(route)) {
                    addChild('option', units.adultlist[i].name, "second_unit_select");
                }
            }
            break;
        case "male": //add Corrin, then all female units from this unit's route, then others, then child
            addChild('option', "Corrin", "second_unit_select");
            if (origin == "either") {
                for (let i = 1; i < units.adultlist.length; i++) {
                    if (units.adultlist[i].status == "female" && units.adultlist[i].routes.includes(route)) {
                        addChild('option', units.adultlist[i].name, "second_unit_select");
                    }
                }
                if (route == "br") {
                    for (let i = 0; i < units.adultlist[first_unit_index].others_br.length; i++) {
                        addChild('option', units.adultlist[first_unit_index].others_br[i], "second_unit_select");
                    }
                }
                else if (route == "cq") {
                    for (let i = 0; i < units.adultlist[first_unit_index].others_cq.length; i++) {
                        addChild('option', units.adultlist[first_unit_index].others_cq[i], "second_unit_select");
                    }
                }
                else {
                    for (let i = 0; i < units.adultlist[first_unit_index].others_rev.length; i++) {
                        addChild('option', units.adultlist[first_unit_index].others_rev[i], "second_unit_select");
                    }
                }
            }
            else {
                for (let i = 1; i < units.adultlist.length; i++) {
                    if (units.adultlist[i].status == "female" && (units.adultlist[i].origin == origin || units.adultlist[i].origin == "either")) {
                        addChild('option', units.adultlist[i].name, "second_unit_select");
                    }
                }
                for (let i = 0; i < others.length; i++) {
                    addChild('option', others[i], "second_unit_select");
                }
                if (route == "rev") {
                    for (let i = 0; i < units.adultlist[first_unit_index].rev_only.length; i++) {
                        addChild('option', units.adultlist[first_unit_index].rev_only[i], "second_unit_select");
                    }
                }
                addChild('option', units.adultlist[first_unit_index].child, "second_unit_select");
                addChild('option', "Kana", "second_unit_select");
                addChild('option', "Shigure", "second_unit_select");
            }
            break;
        case "female": //add Corrin, then all male units from this unit's route, then others, then all non-Shigure kids
            addChild('option', "Corrin", "second_unit_select");
            if (origin == "either") {
                for (let i = 1; i < units.adultlist.length; i++) {
                    if (units.adultlist[i].status == "male" && units.adultlist[i].routes.includes(route)) {
                        addChild('option', units.adultlist[i].name, "second_unit_select");
                    }
                }
                if (route == "br") {
                    for (let i = 0; i < units.adultlist[first_unit_index].others_br.length; i++) {
                        addChild('option', units.adultlist[first_unit_index].others_br[i], "second_unit_select");
                    }
                }
                else if (route == "cq") {
                    for (let i = 0; i < units.adultlist[first_unit_index].others_cq.length; i++) {
                        addChild('option', units.adultlist[first_unit_index].others_cq[i], "second_unit_select");
                    }
                }
                else {
                    for (let i = 0; i < units.adultlist[first_unit_index].others_rev.length; i++) {
                        addChild('option', units.adultlist[first_unit_index].others_rev[i], "second_unit_select");
                    }
                }
                for (let i = 0; i < units.kidlist.length; i++) {
                    if (units.kidlist[i].routes.includes(route) && units.kidlist[i].name != "Shigure") {
                        addChild('option', units.kidlist[i].name, "second_unit_select");
                    }
                }
            }
            else {
                for (let i = 1; i < units.adultlist.length; i++) {
                    if (units.adultlist[i].status == "male" && (units.adultlist[i].origin == origin || units.adultlist[i].origin == "either")) {
                        addChild('option', units.adultlist[i].name, "second_unit_select");
                    }
                }
                for (let i = 0; i < others.length; i++) {
                    addChild('option', others[i], "second_unit_select");
                }
                if (route == "rev") {
                    for (let i = 0; i < units.adultlist[first_unit_index].rev_only.length; i++) {
                        addChild('option', units.adultlist[first_unit_index].rev_only[i], "second_unit_select");
                    }
                }
                for (let i = 0; i < units.kidlist.length; i++) {
                    if (units.kidlist[i].routes.includes(route) && units.kidlist[i].name != "Shigure") {
                        addChild('option', units.kidlist[i].name, "second_unit_select");
                    }
                }
            }
            break;
        case "malekid": //add Corrin, then their father, then all opposite gender kids from their route, then others, then all female units from their route
        case "femalekid":
            let opposite_status = "";
            if (status == "malekid") {
                opposite_status = "femalekid";
            }
            else {
                opposite_status = "malekid";
            }
            addChild('option', "Corrin", "second_unit_select");
            if (origin == "either") {
                for (let i = 1; i < units.kidlist.length; i++) {
                    if (units.kidlist[i].status == opposite_status && units.kidlist[i].routes.includes(route)) {
                        addChild('option', units.kidlist[i].name, "second_unit_select");
                    }
                }
                if (route == "br") {
                    for (let i = 0; i < units.kidlist[first_unit_index].others_br.length; i++) {
                        addChild('option', units.kidlist[first_unit_index].others_br[i], "second_unit_select");
                    }
                }
                else if (route == "cq") {
                    for (let i = 0; i < units.kidlist[first_unit_index].others_cq.length; i++) {
                        addChild('option', units.kidlist[first_unit_index].others_cq[i], "second_unit_select");
                    }
                }
                else {
                    for (let i = 0; i < units.kidlist[first_unit_index].others_rev.length; i++) {
                        addChild('option', units.kidlist[first_unit_index].others_rev[i], "second_unit_select");
                    }
                }
                addChild('option', units.kidlist[first_unit_index].father, "second_unit_select");
                for (let i = 1; i < units.adultlist.length; i++) {
                    if (units.adultlist[i].status == "female" && units.adultlist[i].routes.includes(route)) {
                        addChild('option', units.adultlist[i].name, "second_unit_select");
                    }
                }
            }
            else {
                for (let i = 1; i < units.kidlist.length; i++) {
                    if (units.kidlist[i].status == opposite_status && (units.kidlist[i].origin == origin || units.kidlist[i].origin == "either")) {
                        addChild('option', units.kidlist[i].name, "second_unit_select");
                    }
                }
                for (let i = 0; i < others.length; i++) {
                    addChild('option', others[i], "second_unit_select");
                }
                if (route == "rev") {
                    for (let i = 0; i < units.kidlist[first_unit_index].rev_only.length; i++) {
                        addChild('option', units.kidlist[first_unit_index].rev_only[i], "second_unit_select");
                    }
                }
                addChild('option', units.kidlist[first_unit_index].father, "second_unit_select");
                for (let i = 1; i < units.adultlist.length; i++) {
                    if (units.adultlist[i].status == "female" && (units.adultlist[i].origin == origin || units.adultlist[i].origin == "either")) {
                        addChild('option', units.adultlist[i].name, "second_unit_select");
                    }
                }
            }
            break;
        case "corrinsexual": //add Corrin, Kana and others only
            addChild('option', "Corrin", "second_unit_select");
            for (let i = 0; i < others.length; i++) {
                addChild('option', others[i], "second_unit_select");
            }
            addChild('option', "Kana", "second_unit_select");
            break;
    }
    disableButtons();
}

function disableButtons() {
    let second_unit_name = document.getElementById("second_unit_select").value;
    if (second_unit_name == "Second unit") {
        document.getElementById("1_button").disabled = true;
        document.getElementById("2_button").disabled = true;
        document.getElementById("3_button").disabled = true;
        document.getElementById("4_button").disabled = true;
        return;
    }
}

function enableButtons() {
    let second_unit_name = document.getElementById("second_unit_select").value;
    if (second_unit_name == "Second unit") {
        disableButtons();
        return;
    }
    document.getElementById("1_button").disabled = false;
    document.getElementById("2_button").disabled = false;
    document.getElementById("3_button").disabled = false;
    document.getElementById("4_button").disabled = false;
}

function addSupportPoints(points) {
    document.getElementById("leaderboard_unit_select").disabled = false;
    let first_unit = document.getElementById("first_unit_select").value;
    let second_unit = document.getElementById("second_unit_select").value;
    if (first_unit.concat(second_unit) in supports_dict) {
        supports_dict[first_unit.concat(second_unit)] += points
    }
    else if (second_unit.concat(first_unit) in supports_dict) {
        supports_dict[second_unit.concat(first_unit)] += points
    }
    else {
        supports_dict[first_unit.concat(second_unit)] = points
    }
    lb_options = document.getElementById("leaderboard_unit_select").options;
    first_found = false;
    second_found = false;
    for (let i = 0; i < lb_options.length; i++) {
        if (lb_options[i].text == first_unit) {
            first_found = true;
        }
        if (lb_options[i].text == second_unit) {
            second_found = true;
        }
    }
    if (!(first_found)) {
        addChild('option', first_unit, "leaderboard_unit_select")
    }
    if (!(second_found)) {
        addChild('option', second_unit, "leaderboard_unit_select")
    }
    loadUnitLB("first_unit_select");
}

function loadUnitLB(first_unit_origin) {
    lb_body.innerHTML = "";
    let support_keys = Object.keys(supports_dict);
    let first_unit = document.getElementById(first_unit_origin).value;
    document.getElementById("leaderboard_unit_select").value = first_unit;
    let second_units = [];
    let point_array = [];
    let need_to_push = true;

    //get all supports
    for (let i = 0; i < support_keys.length; i++) {
        if (support_keys[i].includes(first_unit)) {
            if ((point_array.length == 0) || (point_array[0] < supports_dict[support_keys[i]])) {
                second_units.unshift(support_keys[i].replace(first_unit, ""));
                point_array.unshift(supports_dict[support_keys[i]]);
                continue;
            }
            for (let j = 1; j < point_array.length; j++) {
                if (point_array[j] < supports_dict[support_keys[i]]) {
                    second_units.splice(j, 0, support_keys[i].replace(first_unit, ""));
                    point_array.splice(j, 0, supports_dict[support_keys[i]]);
                    need_to_push = false;
                    break;
                }
            }
            if (need_to_push) {
                second_units.push(support_keys[i].replace(first_unit, ""));
                point_array.push(supports_dict[support_keys[i]]);
            }
            else {
                need_to_push = true;
            }
        }
    }

    //add to table
    for (let i = 0; i < second_units.length; i++) {
        let to_enter = "<th>"+first_unit+"</th><th>"+second_units[i]+"</th><th>"+point_array[i]+"</th>";
        addChild('tr', to_enter, "lb_body");
    }
}