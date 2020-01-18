function formatInput(){
    var str = arguments[0]


            if (str.indexOf("{") != -1){
                var result = str.replace(/[{0-9}]/gi, "")

            };
            if (str.indexOf(/[a-z\s]/gi) == -1){
                var value = str.replace(/[a-z\s{}]/gi, "")
                console.log(value[0])

                        
                    if(value[0] == 0){
                        result += arguments[1]
                        

                            if(value[1] == 1){
                                result += " " + arguments[2]
                                
                            }
                            else if (value [1] == 2){
                                result += " " + arguments[3]
                            };
                            console.log(result)
                    }
                    else if (value[0] == 1){
                        result += arguments[2]

                            if (value [1] == 2){
                                result += " " + arguments[3]
                            }
                            else if (value[2] == 1){
                                result += " " + arguments[2]
                            };
                            console.log(result)
                    }
                    else if (value[0] == 2){
                        result += arguments[3]
                            
                            if(value[1]== 1){
                                result += " " + arguments[2]
                            }
                    }
                    console.log(result)
            }
}

formatInput("Hello {0} {1}", "Arkademian", "Fighters!")
formatInput("This is an {2}","Halangan","Rintangan","Exercise")