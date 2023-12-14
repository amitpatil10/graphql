const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type PickupForecastSummary {
    _id: ID
    date: String!
    zone: String!
    four_week_all: Float!
    four_week_msq: Float!
    four_week_non_msq: Float!
    ninety_day_all: Float!
    ninety_day_msq: Float!
    ninety_day_non_msq: Float!
    created_date: String!
  }

  input PickupForecastSummaryInput {
    date: String!
    zone: String!
    four_week_all: Float!
    four_week_msq: Float!
    four_week_non_msq: Float!
    ninety_day_all: Float!
    ninety_day_msq: Float!
    ninety_day_non_msq: Float!
    created_date: String!
  }

  input PickupForecastSummaryUpdate {
    _id: ID!
    date: String
    zone: String
    four_week_all: Int
    four_week_msq: Int
    four_week_non_msq: Int
    ninety_day_all: Int
    ninety_day_msq: Int
    ninety_day_non_msq: Int
    created_date: String
  }

  type Event {
    _id: ID
    title: String!
    description: String!
    price: Float!
    date: String!
  }

  type Pick_forecast {
    _id: ID
    date: String!
    zone: String!
    num_alloc_all: Int!
    num_alloc_msq: Int!
    num_alloc_non_msq: Int!
    created_date: String!
  }

  input EventInput {
    _id: ID
    title: String!
    description: String!
    price: Float!
    date: String!
  }

  input Pick_forecastInput {
    _id: ID
    date: String!
    zone: String!
    num_alloc_all: Int!
    num_alloc_msq: Int!
    num_alloc_non_msq: Int!
    created_date: String!
  }

  input EventUpdate {
    _id: ID
    title: String
    description: String
    price: Float
    date: String
  }

  input Pick_forecastUpdate {
    _id: ID
    date: String
    zone: String
    num_alloc_all: Int
    num_alloc_msq: Int
    num_alloc_non_msq: Int
    created_date: String
  }

  input EventDelete {
    _id: ID
    title: String
    description: String
    price: Float
    date: String
  }

  input Pick_forecastDelete {
    _id: ID
    date: String
    zone: String
    num_alloc_all: Int
    num_alloc_msq: Int
    num_alloc_non_msq: Int
    created_date: String
  }

  type AllocStats {
    _id: ID
    created_time: String!
    order: String!
    order_line: String!
    zone: String!
    subzone: String!
    loc: String!
    ibn: String!
    strgtype: String!
    reason_end: String!
    deleted_time: String!
    first_scheduled: Boolean!
    priority: String!
    alloc_type: String!
}

input AllocStatsInput {
    created_time: String!
    order: String!
    order_line: String!
    zone: String!
    subzone: String!
    loc: String!
    ibn: String!
    strgtype: String!
    reason_end: String!
    deleted_time: String!
    first_scheduled: Boolean!
    priority: String!
    alloc_type: String!
}

input AllocStatsUpdate {
    created_time: String
    order: String
    order_line: String
    zone: String
    subzone: String
    loc: String
    ibn: String
    strgtype: String
    reason_end: String
    deleted_time: String
    first_scheduled: Boolean
    priority: String
    alloc_type: String
}


  type RootQuery {
    alloc_stats: [AllocStats!]!
    pickup_forecast_summary: [PickupForecastSummary]
    events: [Event!]!
    pick_forecast: [Pick_forecast!]!
  }

  type RootMutation {

    createAllocStats(alloc_statsInput: AllocStatsInput): AllocStats
    updateAllocStats(_id: ID!, alloc_statsUpdate: AllocStatsUpdate): AllocStats
    deleteAllocStats(_id: ID!): AllocStats

    createPickupForecastSummary(pickupForecastSummaryInput: PickupForecastSummaryInput): PickupForecastSummary
    updatePickupForecastSummary(_id: ID!, pickupForecastSummaryUpdate: PickupForecastSummaryUpdate): PickupForecastSummary
    deletePickupForecastSummary(_id: ID!): PickupForecastSummary

    createEvent(eventInput: EventInput): Event
    updateEvent(_id: ID!, eventUpdate: EventUpdate): Event
    deleteEvent(_id: ID!, eventDelete: EventDelete): Event

    createPick_forecast(pick_forecastInput: Pick_forecastInput): Pick_forecast
    updatePick_forecast(_id: ID!, pick_forecastUpdate: Pick_forecastUpdate): Pick_forecast
    deletePick_forecast(_id: ID!, pick_forecastDelete: Pick_forecastDelete): Pick_forecast
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);

module.exports = schema;
