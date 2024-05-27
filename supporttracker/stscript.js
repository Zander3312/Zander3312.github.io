let unitjson = `{
    "unitlist": [
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
            "others_br": ["Silas", "Takumi"],
            "others_cq": ["Silas", "Gunter"],
            "others_rev": ["Takumi", "Silas"]
        },
        {
            "name": "Azura",
            "status": "female",
            "origin": "either",
            "routes": ["br", "cq", "rev"],
            "others_br": ["Sakura", "Hinoka"],
            "others_cq": ["Elise"],
            "others_rev": ["Sakura", "Elise", "Hinoka"]
        },
        {
            "name": "Kaze",
            "status": "male",
            "origin": "either",
            "routes": ["br", "cq", "rev"],
            "others_br": ["Silas", "Saizo"],
            "others_cq": ["Silas", "Xander"],
            "others_rev": ["Saizo", "Silas", "Xander"]
        },
        {
            "name": "Silas",
            "status": "male",
            "origin": "either",
            "routes": ["br", "cq", "rev"],
            "others_br": ["Jakob", "Kaze", "Ryoma"],
            "others_cq": ["Jakob", "Kaze"],
            "others_rev": ["Jakob", "Kaze", "Ryoma"]
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
            "rev_only": ["Selena", "Nyx", "Niles"]
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
            "rev_only": ["Beruka", "Charlotte", "Laslow"]
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
            "rev_only": ["Effie", "Beruka", "Arthur"]
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
            "rev_only": ["Effie", "Nyx", "Fuga"]
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
            "rev_only": ["Selena", "Peri", "Odin"]
        },
        {
            "name": "Takumi",
            "status": "male",
            "origin": "hoshido",
            "routes": ["br", "rev"],
            "others": ["Jakob", "Hinata", "Ryoma"],
            "rev_only": ["Camilla", "Elise", "Leo"]
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
            "rev_only": ["Charlotte", "Peri", "Keaton"]
        },
        {
            "name": "Ryoma",
            "status": "male",
            "origin": "hoshido",
            "routes": ["br", "rev"],
            "others": ["Silas", "Saizo", "Takumi"],
            "rev_only": ["Camilla", "Elise", "Xander"]
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
            "rev_only": ["Kagero", "Setsuna", "Azama"]
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
            "rev_only": ["Orochi", "Kagero", "Hinata"]
        },
        {
            "name": "Niles",
            "status": "male",
            "origin": "nohr",
            "routes": ["cq", "rev"],
            "others": ["Arthur", "Odin", "Leo"],
            "rev_only": ["Oboro", "Setsuna", "Subaki"]
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
            "rev_only": ["Hana", "Orochi", "Saizo"]
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
            "rev_only": ["Rinkah", "Oboro", "Hayato"]
        },
        {
            "name": "Leo",
            "status": "male",
            "origin": "nohr",
            "routes": ["cq", "rev"],
            "others": ["Xander", "Odin", "Niles"],
            "rev_only": ["Sakura", "Hinoka", "Takumi"]
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
            "rev_only": ["Sakura", "Hinoka", "Ryoma"]
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
    for (let i = 0; i < units.unitlist.length; i++) {
        if (units.unitlist[i].routes.includes(selected_route)) {
            addChild('option', units.unitlist[i].name, "first_unit_select");
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
    for (let i = 0; i < units.unitlist.length; i++) {
        if (units.unitlist[i].name == first_unit_name) {
            first_unit_index = i; //really stupid way of getting this but whatever
            break;
        }
    }

    let status = units.unitlist[first_unit_index].status; //used to generalize universal pairings
    let origin = units.unitlist[first_unit_index].origin;
    let others = units.unitlist[first_unit_index].others; //non-romantic supports or other oddity supports
    switch (status) {
        default:
            alert("Unrecognized unit status; this error should never appear. If you're seeing this, tell Zander his code sucks.");
        case "corrin": //add every other unit on selected route to the list
            for (let i = 1; i < units.unitlist.length; i++) {
                if (units.unitlist[i].routes.includes(route)) {
                    addChild('option', units.unitlist[i].name, "second_unit_select");
                }
            }
            break;
        case "male": //add Corrin, then all female units from this unit's route, then others
            addChild('option', "Corrin", "second_unit_select");
            if (origin == "either") {
                for (let i = 1; i < units.unitlist.length; i++) {
                    if (units.unitlist[i].status == "female" && units.unitlist[i].routes.includes(route)) {
                        addChild('option', units.unitlist[i].name, "second_unit_select");
                    }
                }
                if (route == "br") {
                    for (let i = 0; i < units.unitlist[first_unit_index].others_br.length; i++) {
                        addChild('option', units.unitlist[first_unit_index].others_br[i], "second_unit_select");
                    }
                }
                else if (route == "cq") {
                    for (let i = 0; i < units.unitlist[first_unit_index].others_cq.length; i++) {
                        addChild('option', units.unitlist[first_unit_index].others_cq[i], "second_unit_select");
                    }
                }
                else {
                    for (let i = 0; i < units.unitlist[first_unit_index].others_rev.length; i++) {
                        addChild('option', units.unitlist[first_unit_index].others_rev[i], "second_unit_select");
                    }
                }
            }
            else {
                for (let i = 1; i < units.unitlist.length; i++) {
                    if (units.unitlist[i].status == "female" && (units.unitlist[i].origin == origin || units.unitlist[i].origin == "either")) {
                        addChild('option', units.unitlist[i].name, "second_unit_select");
                    }
                }
                for (let i = 0; i < others.length; i++) {
                    addChild('option', others[i], "second_unit_select");
                }
            }
            break;
        case "female": //add Corrin, then all male units from this unit's route, then others
        addChild('option', "Corrin", "second_unit_select");
        if (origin == "either") {
            for (let i = 1; i < units.unitlist.length; i++) {
                if (units.unitlist[i].status == "male" && units.unitlist[i].routes.includes(route)) {
                    addChild('option', units.unitlist[i].name, "second_unit_select");
                }
            }
            if (route == "br") {
                for (let i = 0; i < units.unitlist[first_unit_index].others_br.length; i++) {
                    addChild('option', units.unitlist[first_unit_index].others_br[i], "second_unit_select");
                }
            }
            else if (route == "cq") {
                for (let i = 0; i < units.unitlist[first_unit_index].others_cq.length; i++) {
                    addChild('option', units.unitlist[first_unit_index].others_cq[i], "second_unit_select");
                }
            }
            else {
                for (let i = 0; i < units.unitlist[first_unit_index].others_rev.length; i++) {
                    addChild('option', units.unitlist[first_unit_index].others_rev[i], "second_unit_select");
                }
            }
        }
        else {
            for (let i = 1; i < units.unitlist.length; i++) {
                if (units.unitlist[i].status == "male" && (units.unitlist[i].origin == origin || units.unitlist[i].origin == "either")) {
                    addChild('option', units.unitlist[i].name, "second_unit_select");
                }
            }
            for (let i = 0; i < others.length; i++) {
                addChild('option', others[i], "second_unit_select");
            }
        }
        break;
        case "corrinsexual": //add Corrin and others only
            addChild('option', "Corrin", "second_unit_select");
            for (let i = 0; i < others.length; i++) {
                addChild('option', others[i], "second_unit_select");
            }
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