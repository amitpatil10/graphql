const PickupForecastSummary = require('./models/pickup_forecast_summary');
const Event = require('./models/event');
const User = require('./models/user');
const Pick_forecast = require('./models/pick_forecast');
const AllocStats = require('./models/alloc_stats');

const resolvers = {
    pickup_forecast_summary: () => {
        return PickupForecastSummary.find()
            .then(pickup_forecast_summary => {
                return pickup_forecast_summary.map(pickup_forecast_summary => ({ ...pickup_forecast_summary._doc }));
            })
            .catch(err => {
                throw err;
            });
    },
    createPickupForecastSummary: args => {
        // const { pickupForecastSummaryInput } = args;
        const pickup_forecast_summary = new PickupForecastSummary({
            date: args.date,
            zone: args.zone,
            four_week_all: args.four_week_all,
            four_week_msq: args.four_week_msq,
            four_week_non_msq:args.four_week_non_msq,
            ninety_day_all:args.ninety_day_all,
            ninety_day_msq:args.ninety_day_msq,
            ninety_day_non_msq:args.ninety_day_non_msq,
            created_date: new Date(args.created_date)
        });
        return pickup_forecast_summary
            .save()
            .then(result => ({ ...result._doc }))
            .catch(err => {
                throw err;
            });
    },
    updatePickupForecastSummary: args => {
        const { _id, pickupForecastSummaryUpdate } = args;
        return PickupForecastSummary.findByIdAndUpdate(_id, pickupForecastSummaryUpdate, { new: true })
            .then(result => ({ ...result._doc }))
            .catch(err => {
                throw err;
            });
    },
    deletePickupForecastSummary: args => {
        const { _id } = args;
        return PickupForecastSummary.findByIdAndDelete(_id)
            .then(result => ({ ...result._doc }))
            .catch(err => {
                throw err;
            });
    },
    events: () => {
        return Event.find()
            .then(events => {
                return events.map(event => {
                    return { ...event._doc };
                });
            })
            .catch(err => {
                throw err;
            });
    },
    pick_forecasts: () => {
        return Pick_forecast.find()
            .then(pick_forecasts => {
                return pick_forecasts.map(pick_forecast => {
                    return { ...pick_forecast._doc };
                });
            })
            .catch(err => {
                throw err;
            });
    },
    createEvent: args => {
        const event = new Event({
            title: args.eventInput.title,
            description: args.eventInput.description,
            price: +args.eventInput.price,
            date: new Date(args.eventInput.date),
            creator: '65365fe283b644a68542e4ed'
        });
        let createdEvents;
        return event
            .save()
            .then(result => {
                createdEvent = { ...result._doc };
                return User.findById('65365fe283b644a68542e4ed');
            });
    },
    updateEvent: args => {
        const { _id, eventUpdate } = args;
        let CreatedEvents;
        const result = Event.findOneAndUpdate({ _id }, eventUpdate);
        return result;
    },
    deleteEvent: args => {
        const { _id, eventDelete } = args;
        let CreatedEvents;
        const result = Event.findOneAndDelete({ _id }, eventDelete);
        return result;
    },
    pick_forecast: () => {
        return Pick_forecast.find()
            .then(pick_forecast => {
                return pick_forecast.map(pick_forecast => {
                    return { ...pick_forecast._doc };
                });
            })
            .catch(err => {
                throw err;
            });
    },
    createPick_forecast: args => {
        const pick_forecast = new Pick_forecast({
            date: args.pick_forecastInput.date,
            zone: args.pick_forecastInput.zone,
            num_alloc_all: args.pick_forecastInput.num_alloc_all,
            num_alloc_msq: args.pick_forecastInput.num_alloc_msq,
            num_alloc_non_msq: args.pick_forecastInput.num_alloc_non_msq,
            created_date: new Date(args.pick_forecastInput.created_date)
        });
        return pick_forecast.save()
            .then(result => {
                return { ...result._doc };
            })
            .catch(err => {
                console.error("Error saving pick_forecast:", err);
                throw err;
            });
    },
    updatePick_forecast: args => {
        const { _id, pick_forecastUpdate } = args;
        let updatedPick_forecast;
        return Pick_forecast.findOneAndUpdate({ _id }, pick_forecastUpdate, { new: true })
            .then(updatedDocument => {
                if (updatedDocument) {
                    updatedPick_forecast = { ...updatedDocument._doc };
                    return updatedPick_forecast;
                } else {
                    throw new Error("Pick_forecast not found");
                }
            })
            .catch(err => {
                console.error("Error updating pick_forecast:", err);
                throw err;
            });
    },
    deletePick_forecast: args => {
        const { _id } = args;
        return Pick_forecast.findOneAndDelete({ _id })
            .then(deletedDocument => {
                if (deletedDocument) {
                    return { ...deletedDocument._doc };
                } else {
                    throw new Error("Pick_forecast not found");
                }
            })
            .catch(err => {
                console.error("Error deleting pick_forecast:", err);
                throw err;
            });
    },

    
        alloc_stats: () => {
            return AllocStats.find()
                .then(alloc_stats => {
                    return alloc_stats.map(alloc_stat => {
                        return { ...alloc_stat._doc };
                    });
                })
                .catch(err => {
                    throw err;
                });
        },

        createAllocStats: args => {
            const alloc_stats = new AllocStats({
                created_time: new Date(args.alloc_statsInput.created_time),
                order: args.alloc_statsInput.order,
                order_line: args.alloc_statsInput.order_line,
                zone: args.alloc_statsInput.zone,
                subzone: args.alloc_statsInput.subzone,
                loc: args.alloc_statsInput.loc,
                ibn: args.alloc_statsInput.ibn,
                strgtype: args.alloc_statsInput.strgtype,
                reason_end: args.alloc_statsInput.reason_end,
                deleted_time: new Date(args.alloc_statsInput.deleted_time),
                first_scheduled: args.alloc_statsInput.first_scheduled,
                priority: args.alloc_statsInput.priority,
                alloc_type: args.alloc_statsInput.alloc_type
            });
            return alloc_stats.save()
                .then(result => {
                    return { ...result._doc };
                })
                .catch(err => {
                    console.error("Error saving alloc_stats:", err);
                    throw err;
                });
        }
    

};

module.exports = resolvers;
