const mongoose = require('mongoose');
var int32 = require('mongoose-int32');

const NewSchema  = new mongoose.Schema({
    // _id:ObjectId,
    'Auto Nagar':{
        data:{
            data:{
                data_available:Boolean,
                datetime:String,
                health_recommendations:{
                    active:String,
                    children:String,
                    elderly:String,
                    general_populatio:String,
                    heart_diseases:String,
                    lung_diseases:String,
                    pregnant_women:String
                },
                indexes:{
                    baqi:{
                        aqi: int32,
                        aqi_display:String,
                        category:String,
                        color:String,
                        display_name:String,
                        dominant_pollutant:String
                    },
                    ind_cpcb:{
                        aqi: int32,
                        aqi_display:String,
                        category:String,
                        color:String,
                        display_name:String,
                        dominant_pollutant:String
                    }
                },
                pollutants:{
                    co:{
                        aqi_information:{
                            baqi:{
                                aqi:int32,
                                aqi_display:String,
                                category:String,
                                color:String,
                                display_name:String
                            }
                        },
                        concentration:{
                            concentration:String,
                            value:double
                        },
                        display_name:String,
                        full_name:String,
                        sources_and_effects:{
                            effects:String,
                            sources:String
                        }
                    },
                    no2:{
                        aqi_information:{
                            baqi:{
                                aqi:int32,
                                aqi_display:String,
                                category:String,
                                color:String,
                                display_name:String
                            }
                        },
                        concentration:{
                            concentration:String,
                            value:double
                        },
                        display_name:String,
                        full_name:String,
                        sources_and_effects:{
                            effects:String,
                            sources:String
                        }
                    },
                    o3:{
                        aqi_information:{
                            baqi:{
                                aqi:int32,
                                aqi_display:String,
                                category:String,
                                color:String,
                                display_name:String
                            }
                        },
                        concentration:{
                            concentration:String,
                            value:double
                        },
                        display_name:String,
                        full_name:String,
                        sources_and_effects:{
                            effects:String,
                            sources:String
                        }
                    },
                    pm10:{
                        aqi_information:{
                            baqi:{
                                aqi:int32,
                                aqi_display:String,
                                category:String,
                                color:String,
                                display_name:String
                            }
                        },
                        concentration:{
                            concentration:String,
                            value:double
                        },
                        display_name:String,
                        full_name:String,
                        sources_and_effects:{
                            effects:String,
                            sources:String
                        }
                    },
                    pm25:{
                        aqi_information:{
                            baqi:{
                                aqi:int32,
                                aqi_display:String,
                                category:String,
                                color:String,
                                display_name:String
                            }
                        },
                        concentration:{
                            concentration:String,
                            value:double
                        },
                        display_name:String,
                        full_name:String,
                        sources_and_effects:{
                            effects:String,
                            sources:String
                        }
                    },
                    so2:{
                        aqi_information:{
                            baqi:{
                                aqi:int32,
                                aqi_display:String,
                                category:String,
                                color:String,
                                display_name:String
                            }
                        },
                        concentration:{
                            concentration:String,
                            value:double
                        },
                        display_name:String,
                        full_name:String,
                        sources_and_effects:{
                            effects:String,
                            sources:String
                        }
                    },
                },
                error:null,
                metadata:null
            }
        }
    },
    'bandar_road':{
        data:{
            data:{
                data_available:Boolean,
                datetime:String,
                health_recommendations:{
                    active:String,
                    children:String,
                    elderly:String,
                    general_populatio:String,
                    heart_diseases:String,
                    lung_diseases:String,
                    pregnant_women:String
                },
                indexes:{
                    baqi:{
                        aqi: int32,
                        aqi_display:String,
                        category:String,
                        color:String,
                        display_name:String,
                        dominant_pollutant:String
                    },
                    ind_cpcb:{
                        aqi: int32,
                        aqi_display:String,
                        category:String,
                        color:String,
                        display_name:String,
                        dominant_pollutant:String
                    }
                },
                pollutants:{
                    co:{
                        aqi_information:{
                            baqi:{
                                aqi:int32,
                                aqi_display:String,
                                category:String,
                                color:String,
                                display_name:String
                            }
                        },
                        concentration:{
                            concentration:String,
                            value:double
                        },
                        display_name:String,
                        full_name:String,
                        sources_and_effects:{
                            effects:String,
                            sources:String
                        }
                    },
                    no2:{
                        aqi_information:{
                            baqi:{
                                aqi:int32,
                                aqi_display:String,
                                category:String,
                                color:String,
                                display_name:String
                            }
                        },
                        concentration:{
                            concentration:String,
                            value:double
                        },
                        display_name:String,
                        full_name:String,
                        sources_and_effects:{
                            effects:String,
                            sources:String
                        }
                    },
                    o3:{
                        aqi_information:{
                            baqi:{
                                aqi:int32,
                                aqi_display:String,
                                category:String,
                                color:String,
                                display_name:String
                            }
                        },
                        concentration:{
                            concentration:String,
                            value:double
                        },
                        display_name:String,
                        full_name:String,
                        sources_and_effects:{
                            effects:String,
                            sources:String
                        }
                    },
                    pm10:{
                        aqi_information:{
                            baqi:{
                                aqi:int32,
                                aqi_display:String,
                                category:String,
                                color:String,
                                display_name:String
                            }
                        },
                        concentration:{
                            concentration:String,
                            value:double
                        },
                        display_name:String,
                        full_name:String,
                        sources_and_effects:{
                            effects:String,
                            sources:String
                        }
                    },
                    pm25:{
                        aqi_information:{
                            baqi:{
                                aqi:int32,
                                aqi_display:String,
                                category:String,
                                color:String,
                                display_name:String
                            }
                        },
                        concentration:{
                            concentration:String,
                            value:double
                        },
                        display_name:String,
                        full_name:String,
                        sources_and_effects:{
                            effects:String,
                            sources:String
                        }
                    },
                    so2:{
                        aqi_information:{
                            baqi:{
                                aqi:int32,
                                aqi_display:String,
                                category:String,
                                color:String,
                                display_name:String
                            }
                        },
                        concentration:{
                            concentration:String,
                            value:double
                        },
                        display_name:String,
                        full_name:String,
                        sources_and_effects:{
                            effects:String,
                            sources:String
                        }
                    },
                },
                error:null,
                metadata:null
            }
        }
    },
    'governorpet':{
        data:{
            data:{
                data_available:Boolean,
                datetime:String,
                health_recommendations:{
                    active:String,
                    children:String,
                    elderly:String,
                    general_populatio:String,
                    heart_diseases:String,
                    lung_diseases:String,
                    pregnant_women:String
                },
                indexes:{
                    baqi:{
                        aqi: int32,
                        aqi_display:String,
                        category:String,
                        color:String,
                        display_name:String,
                        dominant_pollutant:String
                    },
                    ind_cpcb:{
                        aqi: int32,
                        aqi_display:String,
                        category:String,
                        color:String,
                        display_name:String,
                        dominant_pollutant:String
                    }
                },
                pollutants:{
                    co:{
                        aqi_information:{
                            baqi:{
                                aqi:int32,
                                aqi_display:String,
                                category:String,
                                color:String,
                                display_name:String
                            }
                        },
                        concentration:{
                            concentration:String,
                            value:double
                        },
                        display_name:String,
                        full_name:String,
                        sources_and_effects:{
                            effects:String,
                            sources:String
                        }
                    },
                    no2:{
                        aqi_information:{
                            baqi:{
                                aqi:int32,
                                aqi_display:String,
                                category:String,
                                color:String,
                                display_name:String
                            }
                        },
                        concentration:{
                            concentration:String,
                            value:double
                        },
                        display_name:String,
                        full_name:String,
                        sources_and_effects:{
                            effects:String,
                            sources:String
                        }
                    },
                    o3:{
                        aqi_information:{
                            baqi:{
                                aqi:int32,
                                aqi_display:String,
                                category:String,
                                color:String,
                                display_name:String
                            }
                        },
                        concentration:{
                            concentration:String,
                            value:double
                        },
                        display_name:String,
                        full_name:String,
                        sources_and_effects:{
                            effects:String,
                            sources:String
                        }
                    },
                    pm10:{
                        aqi_information:{
                            baqi:{
                                aqi:int32,
                                aqi_display:String,
                                category:String,
                                color:String,
                                display_name:String
                            }
                        },
                        concentration:{
                            concentration:String,
                            value:double
                        },
                        display_name:String,
                        full_name:String,
                        sources_and_effects:{
                            effects:String,
                            sources:String
                        }
                    },
                    pm25:{
                        aqi_information:{
                            baqi:{
                                aqi:int32,
                                aqi_display:String,
                                category:String,
                                color:String,
                                display_name:String
                            }
                        },
                        concentration:{
                            concentration:String,
                            value:double
                        },
                        display_name:String,
                        full_name:String,
                        sources_and_effects:{
                            effects:String,
                            sources:String
                        }
                    },
                    so2:{
                        aqi_information:{
                            baqi:{
                                aqi:int32,
                                aqi_display:String,
                                category:String,
                                color:String,
                                display_name:String
                            }
                        },
                        concentration:{
                            concentration:String,
                            value:double
                        },
                        display_name:String,
                        full_name:String,
                        sources_and_effects:{
                            effects:String,
                            sources:String
                        }
                    },
                },
                error:null,
                metadata:null
            }
        }
    }
});

module.exports = Apidata = mongoose.model('apiData',NewSchema);