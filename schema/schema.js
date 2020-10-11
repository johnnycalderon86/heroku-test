const graphql = require('graphql');
const _ = require('lodash');

const Circuit = require('../models/Circuit')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull,

} = graphql
//dummy data for


const CircuitType = new GraphQLObjectType({
    name: 'Circuit',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        city: { type: GraphQLString },
        fastestLap: { type: GraphQLString },
        fastestLapDriver: { type: GraphQLString },
        fastestLapYear: { type: GraphQLString },
        fastestLapTeam: { type: GraphQLString },
        fastestLapCar: { type: GraphQLString },
        length: { type: GraphQLString },
        country: { type: GraphQLString },
        trackImage: { type: GraphQLString },
        weekendDate: { type: GraphQLString },
        month: { type: GraphQLString },


    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        circuit: {
            type: CircuitType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                //code to get data from db/other sourse
                return Circuit.findById(args.id)
            }
        },
        circuits: {
            type: GraphQLList(CircuitType),
            resolve(parent, args) {
                return Circuit.find({})
            }

        }
    }
})
// const Mutation = new GraphQLObjectType({
//     name: 'Mutation',
//     fields: {
//         addCircuit: {
//             type: CircuitType,
//             args: {
//                 name: { type: new GraphQLNonNull(GraphQLString) },
//                 city: { type: new GraphQLNonNull(GraphQLString) },
//                 fastestLap: { type: GraphQLString },
//                 fastestLapDriver: { type: new GraphQLNonNull(GraphQLString) },
//                 fastestLapYear: { type: GraphQLString },
//                 fastestLapTeam: { type: GraphQLString },
//                 fastestLapCar: { type: GraphQLString },
//                 length: { type: new GraphQLNonNull(GraphQLString) },
//                 country: { type: new GraphQLNonNull(GraphQLString) },
//                 trackImage: { type: new GraphQLNonNull(GraphQLString) },
//                 weekendDate: { type: new GraphQLNonNull(GraphQLString) },
//                 month: { type: new GraphQLNonNull(GraphQLString) },
//             },
//             resolve(parent, args) {
//                 let circuit = new Circuit({
//                     name: args.name,
//                     city: args.city,
//                     fastestLap: args.fastestLap,
//                     fastestLapDriver: args.fastestLapDriver,
//                     fastestLapYear: args.fastestLapYear,
//                     fastestLapTeam: args.fastestLapTeam,
//                     fastestLapCar: args.fastestLapCar,
//                     length: args.length,
//                     country: args.country,
//                     trackImage: args.trackImage,
//                     weekendDate: args.weekendDate,
//                     month: args.month
//                 });
//                 return circuit.save()
//             }
//         }
//     }
// })

module.exports = new GraphQLSchema({
    query: RootQuery
   
})
// const TeamsType = new GraphQLObjectType({
//     name: 'Teams',
//     fields: () => ({
//         id: { type: GraphQLString },
//         name: { type: GraphQLString },
//         drivers: { type: GraphQLString },
//         teamPrincipal: { type: GraphQLString },

//     })
// })

// const DriversType = new GraphQLObjectType({
//     name: 'Drivers',
//     fields: () => ({
//         id: { type: GraphQLString },
//         name: { type: GraphQLString },
//         team: { type: GraphQLString },


//     })
// })

        // teams: {
        //     type: TeamsType,
        //     args: { id: { type: GraphQLString } },
        //     resolve(parent, args) {
        //         //code to get data from db/other sourse
        //     }
        // },
        // drivers: {
        //     type: DriversType,
        //     args: { id: { type: GraphQLString } },
        //     resolve(parent, args) {
        //         //code to get data from db/other sourse
        //     }
        // }

