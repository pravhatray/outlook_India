import React from 'react'

const dataReducers = (state, action) => {
    switch (action.type) {
        case "POLITICS_DATA":
            return {
                ...state,
                isLoading: false,
                isError: false,
                politics: action.payload
            }
        case "CRYPTO_DATA":
            return {
                ...state,
                isLoading: false,
                isError: false,

                crypto: action.payload,


            }
        case "BUSINESS_DATA":
            return {
                ...state,
                isLoading: false,
                isError: false,

                business: action.payload,


            }

        case "ENTERTAINMENT_DATA":
            return {
                ...state,
                isLoading: false,
                isError: false,

                entertainment: action.payload,


            }
            case "OTHER_DATA":
                return {
                    ...state,
                    isLoading: false,
                    isError: false,
    
                    others: action.payload,
    
    
                }

        case "HEALTH_DATA":
            return {
                ...state,
                isLoading: false,
                isError: false,

                health: action.payload,


            }

        case "SCIENCE_DATA":
            return {
                ...state,
                isLoading: false,
                isError: false,

                science: action.payload,


            }

        case "SPORTS_DATA":
            return {
                ...state,
                isLoading: false,
                isError: false,

                sports: action.payload,


            }

            case "SPORTS_MORE_DATA":
                return {
                    ...state,
                    isLoading: false,
                    isError: false,
    
                    sports_detail: action.payload,
    
    
                }
                case "TECH_MORE_DATA":
                    return {
                        ...state,
                        isLoading: false,
                        isError: false,
        
                        tech_detail: action.payload,
        
        
                    }

                    case "SCIENCE_MORE_DATA":
                        return {
                            ...state,
                            isLoading: false,
                            isError: false,
            
                            science_detail: action.payload,
            
            
                        }

                           case "HEALTH_MORE_DATA":
                        return {
                            ...state,
                            isLoading: false,
                            isError: false,
            
                            health_detail: action.payload,
            
            
                        }

                        case "BUSINESS_MORE_DATA":
                            return {
                                ...state,
                                isLoading: false,
                                isError: false,
                
                                business_detail: action.payload,
                
                
                            }
                            case "ENTERTAINMENT_MORE_DATA":
                            return {
                                ...state,
                                isLoading: false,
                                isError: false,
                                entertainment_detail: action.payload,
                            }

                            case "CRYPTO_MORE_DATA":
                                return {
                                    ...state,
                                    isLoading: false,
                                    isError: false,
                    
                                    crypto_detail: action.payload,
                    
                    
                                }

        case "TECH_DATA":
            return {
                ...state,
                isLoading: false,
                isError: false,

                tech: action.payload,

            }

        case "LOADING_DATA":
            return {
                ...state,
                isLoading: true,
                isError: false,
                politics: [],
                crypto: [],
                business: [],
                tech: []
            }
        case "ERROR_DATA":
            return {
                ...state,
                isLoading: false,
                isError: true,
                politics: [],
                crypto: [],
                business: [],
                tech: []
            }
        default: return state
    }
}

export default dataReducers