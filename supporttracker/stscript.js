let unitjson = `{
    "unitlist": [
        {
            "name": "Corrin",
            "status": "corrin",
            "others": []
        },
        {
            "name": "Felicia",
            "status": "female",
            "others": ["Peri", "Flora"]
        },
        {
            "name": "Jakob",
            "status": "male",
            "others": ["Gunter", "Silas"]
        },
        {
            "name": "Elise",
            "status": "female",
            "others": ["Effie", "Camilla", "Azura"]
        },
        {
            "name": "Silas",
            "status": "male",
            "others": ["Jakob", "Kaze"]
        },
        {
            "name": "Arthur",
            "status": "male",
            "others": ["Benny", "Keaton", "Niles"]
        },
        {
            "name": "Effie",
            "status": "female",
            "others": ["Elise", "Mozu", "Nyx"]
        },
        {
            "name": "Odin",
            "status": "male",
            "others": ["Niles", "Leo", "Laslow"]
        },
        {
            "name": "Niles",
            "status": "male",
            "others": ["Odin", "Leo", "Arthur"]
        },
        {
            "name": "Nyx",
            "status": "female",
            "others": ["Effie", "Mozu", "Charlotte"]
        },
        {
            "name": "Azura",
            "status": "female",
            "others": ["Elise"]
        },
        {
            "name": "Selena",
            "status": "female",
            "others": ["Camilla", "Beruka", "Peri"]
        },
        {
            "name": "Beruka",
            "status": "female",
            "others": ["Camilla", "Selena", "Charlotte"]
        },
        {
            "name": "Camilla",
            "status": "female",
            "others": ["Selena", "Beruka", "Elise"]
        },
        {
            "name": "Peri",
            "status": "female",
            "others": ["Selena", "Felicia", "Charlotte"]
        },
        {
            "name": "Laslow",
            "status": "male",
            "others": ["Xander", "Odin", "Keaton"]
        },
        {
            "name": "Charlotte",
            "status": "female",
            "others": ["Peri", "Beruka", "Nyx"]
        },
        {
            "name": "Benny",
            "status": "male",
            "others": ["Arthur", "Keaton"]
        },
        {
            "name": "Leo",
            "status": "male",
            "others": ["Xander", "Odin", "Niles"]
        },
        {
            "name": "Gunter",
            "status": "corrinsexual",
            "others": ["Jakob"]
        },
        {
            "name": "Xander",
            "status": "male",
            "others": ["Laslow", "Leo", "Kaze"]
        },
        {
            "name": "Shura",
            "status": "corrinsexual",
            "others": []
        },
        {
            "name": "Flora",
            "status": "corrinsexual",
            "others": ["Felicia"]
        },
        {
            "name": "Izana",
            "status": "corrinsexual",
            "others": []
        },
        {
            "name": "Mozu",
            "status": "female",
            "others": ["Effie", "Nyx"]
        }
    ]
}`;

let units = JSON.parse(unitjson);
let supports_dict = {};
let lb_body = document.getElementById("lb_body");
document.getElementById("second_unit_select").disabled = true;
document.getElementById("leaderboard_unit_select").disabled = true;
document.getElementById("1_button").disabled = true;
document.getElementById("2_button").disabled = true;
document.getElementById("3_button").disabled = true;
document.getElementById("4_button").disabled = true;
loadFirstUnits();

function addChild(elt_type, inner, elt_id) {
    let child = document.createElement(elt_type); //Prepare value to attach to dropdown list
    child.innerHTML = inner; //Write contents to child
    document.getElementById(elt_id).appendChild(child); //Append HTML
}

function loadFirstUnits() {
    for (let i = 0; i < units.unitlist.length; i++) {
        addChild('option', units.unitlist[i].name, "first_unit_select");
    }
}

function loadSecondUnits() {
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
    let others = units.unitlist[first_unit_index].others; //non-romantic supports or other oddity supports
    switch (status) {
        default:
            alert("Unrecognized unit status; this error should never appear. If you're seeing this, tell Zander his code sucks.");
        case "corrin": //add every other unit to the list
            for (let i = 1; i < units.unitlist.length; i++) {
                addChild('option', units.unitlist[i].name, "second_unit_select");
            }
            break;
        case "male": //add Corrin, then all female units, then others
            addChild('option', "Corrin", "second_unit_select");
            for (let i = 1; i < units.unitlist.length; i++) {
                if (units.unitlist[i].status != "female") {
                    continue;
                }
                addChild('option', units.unitlist[i].name, "second_unit_select");
            }
            for (let i = 0; i < others.length; i++) {
                addChild('option', others[i], "second_unit_select");
            }
            break;
        case "female": //add Corrin, then all male units, then others
            addChild('option', "Corrin", "second_unit_select");
            for (let i = 1; i < units.unitlist.length; i++) {
                if (units.unitlist[i].status != "male") {
                    continue;
                }
                addChild('option', units.unitlist[i].name, "second_unit_select");
            }
            for (let i = 0; i < others.length; i++) {
                addChild('option', others[i], "second_unit_select");
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
    let second_units = [];
    let point_array = [];

    //get all supports
    for (let i = 0; i < support_keys.length; i++) {
        if (support_keys[i].includes(first_unit)) {
            if ((point_array.length == 0) || (point_array[0] < supports_dict[support_keys[i]])) {
                second_units.unshift(support_keys[i].replace(first_unit, ""));
                point_array.unshift(supports_dict[support_keys[i]]);
            } else {
                second_units.push(support_keys[i].replace(first_unit, ""));
                point_array.push(supports_dict[support_keys[i]]);
            }
        }
    }

    //add to table
    for (let i = 0; i < second_units.length; i++) {
        let to_enter = "<th>"+first_unit+"</th><th>"+second_units[i]+"</th><th>"+point_array[i]+"</th>";
        addChild('tr', to_enter, "lb_body");
    }
}