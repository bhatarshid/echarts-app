const continentPopulation = [
    ['asia', 3261050390 ],
    ['africa', 1340598147 ],
    ['europe', 747636026 ],
    ['northamerica', 592072212 ],
    ['southamerica', 430759766],
    ['australia',  43111704 ]
]

const countryPopulation= [
    {
        dataGroupId: 'asia',
        data: [
            ["India", 1407563842], ["China", 1412600000], ["Pakistan", 230557367], ["Bangladesh", 168390210]
        ]
    },
    {
        dataGroupId: 'africa',
        data: [
            ["Nigeria",218839589],["Ethiopia", 124334404],["Egypt",104000000],["South Africa",60800000]
        ]
    },
    {
        dataGroupId: 'europe',
        data:[
            ["Russia",145557576],["Turkey",84680273],["Germany",84079811],["France",67918000]
        ]
    },
    {
        dataGroupId: 'northamerica',
        data: [
            ["United States",331002651],["Canada",37742154], ["Bermuda", 62278],["Greenland", 56770]
        ]
    },
    {
        dataGroupId: 'southamerica',
        data: [
            ["Brazils",216262286], ["Colombia",52606384], ["Argentina",46170211],["Peru",34261755]
        ]
    },
    {
        dataGroupId: 'australia',
        data: [
            ["Australia",26100000],["Papua New Guinea",9300000],["New Zealand",4900000],["Timor-Leste",1645000]
        ]
    }
]


export default continentPopulation;
export {countryPopulation}

///////////////////Data for multilevel drill down////////////////////
const asiaPopulation = {
    dataGroupId: "asia",
    data: [
        ["India", 1407563842, "india"],
        ["China", 1412600000, "china"],
        ["pakistan", 230557367, "pakistan"],
    ],
};

const africaPopulation = {
    dataGroupId: 'africa',
    data: [
        ["Nigeria",218839589, 'nigeria'],["Ethiopia", 124334404, 'ethiopia']//,["Egypt",104000000],["South Africa",60800000]
    ]
};

const europePopulation = {
    dataGroupId: 'europe',
    data:[
        ["Russia",145557576, 'russia'],["Turkey",84680273, 'turkey'],["Germany",84079811, 'germany']
    ],    
}

// level 3
const indiaPopulation = {
    dataGroupId: 'india',
    data: [
        ["Delhi", 11034555], ["Maharastra", 112374333], ["Karnataka", 61130704]
    ]
};

const chinaPopulation = {
    dataGroupId: 'china',
    data: [
        ["Beijing", 21710000], ["Shanghai", 24180000], ["Guangdong", 111690000]
    ]
};

const pakistanPopulation = {
    dataGroupId: 'pakistan',
    data: [
        ["Lahore", 13542000], ["Punjab", 73621290], ["Sindh", 30439893]
    ]
};

const nigeriaPopulation = {
    dataGroupId: "nigeria",
    data: [ ["Kano ", 14253549], ["Lagos ", 12772884], ["Katsina ", 	9300382],
    ],
};

const ethiopiaPopulation = {
    dataGroupId: "ethiopia",
    data: [["Addis ", 3434000],["Gondar ", 360600],
    ],
};

const russiaPopulation = {    
    dataGroupId: "russia",
    data: [['Moscow', 13010112 ],['Krai', 5838273 ],['Petersburg',  5601911 ]
    ]
}

const turkeyPopulation = {
    dataGroupId: 'turkey',
    data: [
        ['Istanbul', 15636000],['Ankara', 2583963],['Izmir', 1758780]
    ]
}

const germanyPopulation = {
    dataGroupId: 'germany',
    data: [
        ['North-Rhine',17925000],['Bavaria',13177000],['Wutemberg',11125000]
    ]
}

export {asiaPopulation, africaPopulation, europePopulation, 
        indiaPopulation, chinaPopulation, pakistanPopulation,nigeriaPopulation, ethiopiaPopulation, russiaPopulation, turkeyPopulation, germanyPopulation}

