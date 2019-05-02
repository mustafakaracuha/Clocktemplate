sap
    .ui
    .define(["sap/ui/core/mvc/Controller"], function (Controller, FragmentController) {
        "use strict";
        var base,
            router;
        return Controller.extend(
            "SapUI5Tutorial.Application.Main.views.StartUp.controller.clock",
            {
                searchinput: function () {
                    if (this.getView().byId("search").getVisible() === true) {
                        this
                            .getView()
                            .byId("search")
                            .setVisible(false)
                    } else {
                        this
                            .getView()
                            .byId("search")
                            .setVisible(true)

                    }
                },
                usermenu: function () {
                    if (this.getView().byId("usermenu").getVisible() === true) {
                        this
                            .getView()
                            .byId("usermenu")
                            .setVisible(false)
                    } else {
                        this
                            .getView()
                            .byId("usermenu")
                            .setVisible(true)

                    }
                },

                onInit: function () {
                  
                    var clock = [

                        {

                            class: "minimalist",
                            first_image: "resources/images/wwg203901_1.jpg",
                            second_image: "resources/images/wwg203901_2.jpg",
                            third_image: "resources/images/wwg203901_3.jpg",
                            name: "The Minimalist Two-Hand Black Leather Watch White",
                            money: "$195.00"
                        }, {

                            class: "vintage",
                            first_image: "resources/images/sr5010_1.jpg",
                            second_image: "resources/images/sr5010_2.jpg",
                            third_image: "resources/images/sr5010_3.jpg",
                            name: "Red Burgundy Dial Burgandy Leather White Polyester",
                            money: "$245.00"
                        }, {
                            class: "vintagered",
                            first_image: "resources/images/prg400-05_1.jpg",
                            second_image: "resources/images/prg400-05_2.jpg",
                            third_image: "resources/images/prg400-05_3.jpg",
                            name: "Vintage Red Burgundy Dial Burgandy Red Polyester",
                            money: "$225.00"
                        }, {
                            class: "durham",
                            first_image: "resources/images/prg2003-05_1.jpg",
                            second_image: "resources/images/prg2003-05_2.jpg",
                            third_image: "resources/images/prg2003-05_3.jpg",
                            name: "Classic Durham Black Dial 40 MM Classic Polyester Watch",
                            money: "$114.00"
                        }, {
                            class: "cblack",
                            first_image: "resources/images/dz1437_1_2.jpg",
                            second_image: "resources/images/dz1437_2_2.jpg",
                            third_image: "resources/images/dz1437_3_3.jpg",
                            name: "Classic Black 36 York Ladies Watch black Polyester",
                            money: "$525.00"
                        }, {
                            class: "cblue",
                            first_image: "resources/images/hb1513348_1_2.jpg",
                            name: "The Minimalist Three Hand Navy And White Polyester",
                            money: "$95.00"
                        }, {
                            class: "csilver",
                            first_image: "resources/images/prg2001-02_1.jpg",
                            second_image: "resources/images/prg2001-02_2.jpg",
                            third_image: "resources/images/prg2001-02_3.jpg",
                            name: "Classic Silver Blue and Whites Silver Polyester Clock" ,
                            money: "$162.00"
                        }, {
                            class: "cbrown",
                            first_image: "resources/images/guw0970g1_1.jpg",
                            second_image: "resources/images/guw0970g1_2.jpg",
                            third_image: "resources/images/guw0970g1_3.jpg",
                            name: "Guess Man Clock Brown Detail Brown Polyester Clock" ,
                            money: "$112.00"
                        }, {
                            class: "cdiesel",
                            first_image:"resources/images/dz4455_1.jpg",
                            second_image:"resources/images/dz4455_2.jpg",
                            name: "Diesel DZ4455 Brown Clock D. Brown Polyester Clock",
                            money: "$999.00"
                        }, {
                            class: "cskagen",
                            first_image: "resources/images/skw6510_1.jpg",
                            second_image: "resources/images/skw6510_2.jpg",
                            third_image: "resources/images/skw6510_4.jpg",
                            name: "Skagen Yellow SKY6510 Quartz Teknology Yellow",
                            money: "$169.00"
                        }, {
                            class: "cskagenred",
                            first_image: "resources/images/skw6512_1.jpg",
                            second_image:"resources/images/skw6512_2.jpg",
                            third_image: "resources/images/skw6512_4.jpg",
                            name: "Skagen Red SKR7360 Quartz  Red Detail Teknology",
                            money: "$219.00"
                        }, {
                            class: "cskagenblue",
                            first_image: "resources/images/skw6508_1.jpg",
                            second_image: "resources/images/skw6508_2.jpg",
                            third_image: "resources/images/skw6508_4.jpg",
                            name: "Skagen Blue SKB3510 Quartz Teknology Blue Polyester",
                            money: "$125.00"
                        }
                    ]
                    oModel.setProperty("/clockModel", clock);
                    this.quick();
                },

                quick: function (e) {
                    if(e){
                        var viewPath = oModel.getProperty(e.getSource().getBindingContext().getPath());
                    }
                    else {
                        var viewPath = oModel.getProperty("/clockModel/0");
                    }
                    var carousel = this
                        .getView()
                        .byId("clockCarousel_Id");
                    carousel.removeAllPages();  
                    
                    oModel.setProperty("/clockview", viewPath);
                    var pageContentFirst = new sap.m.VBox({
                            items: [
                                new sap.m.Image({src: viewPath.first_image})
                                    .addStyleClass("pic-quickview "),
                                new sap.m.Text({text: viewPath.name})
                                    .addStyleClass("list-namequickview"),
                                new sap.m.Text({text: viewPath.money})
                                    .addStyleClass("list-moneyquickview")
                            ]
                        })
                        var pageContentSecond = new sap.m.VBox({
                            items: [
                                new sap.m.Image({src: viewPath.second_image})
                                    .addStyleClass("pic-quickview"),
                                    new sap.m.Text({text: viewPath.name})
                                    .addStyleClass("list-namequickview"),
                                new sap.m.Text({text: viewPath.money})
                                    .addStyleClass("list-moneyquickview")
                                ]
                            })
                            

                    carousel.addPage(pageContentFirst)
                    carousel.addPage(pageContentSecond)
              
                }
            }
        );
    });