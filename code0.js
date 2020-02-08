gdjs.MainMenuCode = {};
gdjs.MainMenuCode.GDYourBrandLogoObjects1= [];
gdjs.MainMenuCode.GDYourBrandLogoObjects2= [];
gdjs.MainMenuCode.GDYourBrandLogoObjects3= [];
gdjs.MainMenuCode.GDPlayButtonObjects1= [];
gdjs.MainMenuCode.GDPlayButtonObjects2= [];
gdjs.MainMenuCode.GDPlayButtonObjects3= [];
gdjs.MainMenuCode.GDBackgroundObjects1= [];
gdjs.MainMenuCode.GDBackgroundObjects2= [];
gdjs.MainMenuCode.GDBackgroundObjects3= [];
gdjs.MainMenuCode.GDPrincipalPanelObjects1= [];
gdjs.MainMenuCode.GDPrincipalPanelObjects2= [];
gdjs.MainMenuCode.GDPrincipalPanelObjects3= [];
gdjs.MainMenuCode.GDGameTextObjects1= [];
gdjs.MainMenuCode.GDGameTextObjects2= [];
gdjs.MainMenuCode.GDGameTextObjects3= [];
gdjs.MainMenuCode.GDPlayButtonTextObjects1= [];
gdjs.MainMenuCode.GDPlayButtonTextObjects2= [];
gdjs.MainMenuCode.GDPlayButtonTextObjects3= [];

gdjs.MainMenuCode.conditionTrue_0 = {val:false};
gdjs.MainMenuCode.condition0IsTrue_0 = {val:false};
gdjs.MainMenuCode.condition1IsTrue_0 = {val:false};


gdjs.MainMenuCode.eventsList0x79bfec = function(runtimeScene) {

{


{
gdjs.MainMenuCode.GDBackgroundObjects2.createFrom(runtimeScene.getObjects("Background"));
{for(var i = 0, len = gdjs.MainMenuCode.GDBackgroundObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDBackgroundObjects2[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDBackgroundObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDBackgroundObjects2[i].setY(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDBackgroundObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDBackgroundObjects2[i].setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDBackgroundObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDBackgroundObjects2[i].setHeight(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}}

}


{


{
gdjs.MainMenuCode.GDPlayButtonObjects2.createFrom(runtimeScene.getObjects("PlayButton"));
gdjs.MainMenuCode.GDPlayButtonTextObjects2.createFrom(runtimeScene.getObjects("PlayButtonText"));
{for(var i = 0, len = gdjs.MainMenuCode.GDPlayButtonObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPlayButtonObjects2[i].setColor("0;0;0");
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDPlayButtonTextObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPlayButtonTextObjects2[i].setColor("250;250;250");
}
}}

}


{


{
gdjs.MainMenuCode.GDGameTextObjects2.createFrom(runtimeScene.getObjects("GameText"));
gdjs.MainMenuCode.GDPlayButtonTextObjects2.createFrom(runtimeScene.getObjects("PlayButtonText"));
{for(var i = 0, len = gdjs.MainMenuCode.GDPlayButtonTextObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPlayButtonTextObjects2[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.MainMenuCode.GDPlayButtonTextObjects2[i].getWidth()) / 2);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDGameTextObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDGameTextObjects2[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.MainMenuCode.GDGameTextObjects2[i].getWidth()) / 2);
}
}}

}


{


{
gdjs.MainMenuCode.GDYourBrandLogoObjects1.createFrom(runtimeScene.getObjects("YourBrandLogo"));
{for(var i = 0, len = gdjs.MainMenuCode.GDYourBrandLogoObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDYourBrandLogoObjects1[i].setWidth(300);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDYourBrandLogoObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDYourBrandLogoObjects1[i].setHeight(300);
}
}}

}


}; //End of gdjs.MainMenuCode.eventsList0x79bfec
gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDPlayButtonObjects2Objects = Hashtable.newFrom({"PlayButton": gdjs.MainMenuCode.GDPlayButtonObjects2});gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDPlayButtonObjects1Objects = Hashtable.newFrom({"PlayButton": gdjs.MainMenuCode.GDPlayButtonObjects1});gdjs.MainMenuCode.eventsList0x79ce7c = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Instructions", false);
}}

}


}; //End of gdjs.MainMenuCode.eventsList0x79ce7c
gdjs.MainMenuCode.eventsList0x79ca0c = function(runtimeScene) {

{

gdjs.MainMenuCode.GDPlayButtonObjects2.createFrom(runtimeScene.getObjects("PlayButton"));

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDPlayButtonObjects2Objects, runtimeScene, true, true);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDPlayButtonObjects2 */
gdjs.MainMenuCode.GDPlayButtonTextObjects2.createFrom(runtimeScene.getObjects("PlayButtonText"));
{for(var i = 0, len = gdjs.MainMenuCode.GDPlayButtonObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPlayButtonObjects2[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDPlayButtonObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPlayButtonObjects2[i].setScale(1.4);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDPlayButtonTextObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPlayButtonTextObjects2[i].setCharacterSize(35);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDPlayButtonTextObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPlayButtonTextObjects2[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.MainMenuCode.GDPlayButtonTextObjects2[i].getWidth()) / 2);
}
}}

}


{

gdjs.MainMenuCode.GDPlayButtonObjects1.createFrom(runtimeScene.getObjects("PlayButton"));

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDPlayButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDPlayButtonObjects1 */
gdjs.MainMenuCode.GDPlayButtonTextObjects1.createFrom(runtimeScene.getObjects("PlayButtonText"));
{for(var i = 0, len = gdjs.MainMenuCode.GDPlayButtonObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPlayButtonObjects1[i].setScale(1.6);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDPlayButtonTextObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPlayButtonTextObjects1[i].setCharacterSize(35 * 1.2);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDPlayButtonTextObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPlayButtonTextObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.MainMenuCode.GDPlayButtonTextObjects1[i].getWidth()) / 2);
}
}
{ //Subevents
gdjs.MainMenuCode.eventsList0x79ce7c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.MainMenuCode.eventsList0x79ca0c
gdjs.MainMenuCode.eventsList0xb4be0 = function(runtimeScene) {

{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Set Scene"); }gdjs.MainMenuCode.eventsList0x79bfec(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Set Scene"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("PlayButton"); }gdjs.MainMenuCode.eventsList0x79ca0c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("PlayButton"); }
}


}; //End of gdjs.MainMenuCode.eventsList0xb4be0


gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuCode.GDYourBrandLogoObjects1.length = 0;
gdjs.MainMenuCode.GDYourBrandLogoObjects2.length = 0;
gdjs.MainMenuCode.GDYourBrandLogoObjects3.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects1.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects2.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects3.length = 0;
gdjs.MainMenuCode.GDBackgroundObjects1.length = 0;
gdjs.MainMenuCode.GDBackgroundObjects2.length = 0;
gdjs.MainMenuCode.GDBackgroundObjects3.length = 0;
gdjs.MainMenuCode.GDPrincipalPanelObjects1.length = 0;
gdjs.MainMenuCode.GDPrincipalPanelObjects2.length = 0;
gdjs.MainMenuCode.GDPrincipalPanelObjects3.length = 0;
gdjs.MainMenuCode.GDGameTextObjects1.length = 0;
gdjs.MainMenuCode.GDGameTextObjects2.length = 0;
gdjs.MainMenuCode.GDGameTextObjects3.length = 0;
gdjs.MainMenuCode.GDPlayButtonTextObjects1.length = 0;
gdjs.MainMenuCode.GDPlayButtonTextObjects2.length = 0;
gdjs.MainMenuCode.GDPlayButtonTextObjects3.length = 0;

gdjs.MainMenuCode.eventsList0xb4be0(runtimeScene);
return;

}
gdjs['MainMenuCode'] = gdjs.MainMenuCode;
