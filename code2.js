gdjs.InGameCode = {};
gdjs.InGameCode.repeatCount2 = 0;

gdjs.InGameCode.repeatCount3 = 0;

gdjs.InGameCode.repeatIndex2 = 0;

gdjs.InGameCode.repeatIndex3 = 0;

gdjs.InGameCode.GDScoreObjects1= [];
gdjs.InGameCode.GDScoreObjects2= [];
gdjs.InGameCode.GDScoreObjects3= [];
gdjs.InGameCode.GDScoreObjects4= [];
gdjs.InGameCode.GDCountDownObjects1= [];
gdjs.InGameCode.GDCountDownObjects2= [];
gdjs.InGameCode.GDCountDownObjects3= [];
gdjs.InGameCode.GDCountDownObjects4= [];
gdjs.InGameCode.GDStartTimerObjects1= [];
gdjs.InGameCode.GDStartTimerObjects2= [];
gdjs.InGameCode.GDStartTimerObjects3= [];
gdjs.InGameCode.GDStartTimerObjects4= [];
gdjs.InGameCode.GDTimerObjects1= [];
gdjs.InGameCode.GDTimerObjects2= [];
gdjs.InGameCode.GDTimerObjects3= [];
gdjs.InGameCode.GDTimerObjects4= [];
gdjs.InGameCode.GDBackgroundObjects1= [];
gdjs.InGameCode.GDBackgroundObjects2= [];
gdjs.InGameCode.GDBackgroundObjects3= [];
gdjs.InGameCode.GDBackgroundObjects4= [];
gdjs.InGameCode.GDfruit1Objects1= [];
gdjs.InGameCode.GDfruit1Objects2= [];
gdjs.InGameCode.GDfruit1Objects3= [];
gdjs.InGameCode.GDfruit1Objects4= [];
gdjs.InGameCode.GDfruit2Objects1= [];
gdjs.InGameCode.GDfruit2Objects2= [];
gdjs.InGameCode.GDfruit2Objects3= [];
gdjs.InGameCode.GDfruit2Objects4= [];
gdjs.InGameCode.GDfruit0Objects1= [];
gdjs.InGameCode.GDfruit0Objects2= [];
gdjs.InGameCode.GDfruit0Objects3= [];
gdjs.InGameCode.GDfruit0Objects4= [];
gdjs.InGameCode.GDFinalPointObjects1= [];
gdjs.InGameCode.GDFinalPointObjects2= [];
gdjs.InGameCode.GDFinalPointObjects3= [];
gdjs.InGameCode.GDFinalPointObjects4= [];
gdjs.InGameCode.GDInitialPointObjects1= [];
gdjs.InGameCode.GDInitialPointObjects2= [];
gdjs.InGameCode.GDInitialPointObjects3= [];
gdjs.InGameCode.GDInitialPointObjects4= [];
gdjs.InGameCode.GDDebuggerObjects1= [];
gdjs.InGameCode.GDDebuggerObjects2= [];
gdjs.InGameCode.GDDebuggerObjects3= [];
gdjs.InGameCode.GDDebuggerObjects4= [];
gdjs.InGameCode.GDPlayerObjects1= [];
gdjs.InGameCode.GDPlayerObjects2= [];
gdjs.InGameCode.GDPlayerObjects3= [];
gdjs.InGameCode.GDPlayerObjects4= [];
gdjs.InGameCode.GDCard3Objects1= [];
gdjs.InGameCode.GDCard3Objects2= [];
gdjs.InGameCode.GDCard3Objects3= [];
gdjs.InGameCode.GDCard3Objects4= [];
gdjs.InGameCode.GDCard2Objects1= [];
gdjs.InGameCode.GDCard2Objects2= [];
gdjs.InGameCode.GDCard2Objects3= [];
gdjs.InGameCode.GDCard2Objects4= [];
gdjs.InGameCode.GDCard1Objects1= [];
gdjs.InGameCode.GDCard1Objects2= [];
gdjs.InGameCode.GDCard1Objects3= [];
gdjs.InGameCode.GDCard1Objects4= [];
gdjs.InGameCode.GDGroundObjects1= [];
gdjs.InGameCode.GDGroundObjects2= [];
gdjs.InGameCode.GDGroundObjects3= [];
gdjs.InGameCode.GDGroundObjects4= [];

gdjs.InGameCode.conditionTrue_0 = {val:false};
gdjs.InGameCode.condition0IsTrue_0 = {val:false};
gdjs.InGameCode.condition1IsTrue_0 = {val:false};
gdjs.InGameCode.condition2IsTrue_0 = {val:false};
gdjs.InGameCode.condition3IsTrue_0 = {val:false};
gdjs.InGameCode.conditionTrue_1 = {val:false};
gdjs.InGameCode.condition0IsTrue_1 = {val:false};
gdjs.InGameCode.condition1IsTrue_1 = {val:false};
gdjs.InGameCode.condition2IsTrue_1 = {val:false};
gdjs.InGameCode.condition3IsTrue_1 = {val:false};


gdjs.InGameCode.eventsList0x690a2c = function(runtimeScene) {

{


{
gdjs.InGameCode.GDScoreObjects2.createFrom(runtimeScene.getObjects("Score"));
{for(var i = 0, len = gdjs.InGameCode.GDScoreObjects2.length ;i < len;++i) {
    gdjs.InGameCode.GDScoreObjects2[i].setColor("250;250;250");
}
}}

}


{


{
gdjs.InGameCode.GDTimerObjects1.createFrom(runtimeScene.getObjects("Timer"));
{for(var i = 0, len = gdjs.InGameCode.GDTimerObjects1.length ;i < len;++i) {
    gdjs.InGameCode.GDTimerObjects1[i].setColor("250;250;250");
}
}}

}


}; //End of gdjs.InGameCode.eventsList0x690a2c
gdjs.InGameCode.eventsList0x6b81dc = function(runtimeScene) {

{


{
/* Reuse gdjs.InGameCode.GDBackgroundObjects2 */
{for(var i = 0, len = gdjs.InGameCode.GDBackgroundObjects2.length ;i < len;++i) {
    gdjs.InGameCode.GDBackgroundObjects2[i].setWidth((gdjs.InGameCode.GDBackgroundObjects2[i].getWidth()) * gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("HeightFactor")));
}
}{for(var i = 0, len = gdjs.InGameCode.GDBackgroundObjects2.length ;i < len;++i) {
    gdjs.InGameCode.GDBackgroundObjects2[i].setHeight((gdjs.InGameCode.GDBackgroundObjects2[i].getHeight()) * gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("HeightFactor")));
}
}}

}


}; //End of gdjs.InGameCode.eventsList0x6b81dc
gdjs.InGameCode.eventsList0x6b19fc = function(runtimeScene) {

{


gdjs.InGameCode.condition0IsTrue_0.val = false;
{
{gdjs.InGameCode.conditionTrue_1 = gdjs.InGameCode.condition0IsTrue_0;
gdjs.InGameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8442900);
}
}if (gdjs.InGameCode.condition0IsTrue_0.val) {
gdjs.InGameCode.GDBackgroundObjects2.createFrom(runtimeScene.getObjects("Background"));
{runtimeScene.getVariables().get("HeightFactor").setNumber(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / (( gdjs.InGameCode.GDBackgroundObjects2.length === 0 ) ? 0 :gdjs.InGameCode.GDBackgroundObjects2[0].getHeight()));
}
{ //Subevents
gdjs.InGameCode.eventsList0x6b81dc(runtimeScene);} //End of subevents
}

}


{


{
gdjs.InGameCode.GDBackgroundObjects1.createFrom(runtimeScene.getObjects("Background"));
{for(var i = 0, len = gdjs.InGameCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.InGameCode.GDBackgroundObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.InGameCode.GDBackgroundObjects1[i].getWidth()) / 2);
}
}{for(var i = 0, len = gdjs.InGameCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.InGameCode.GDBackgroundObjects1[i].setY(0);
}
}}

}


}; //End of gdjs.InGameCode.eventsList0x6b19fc
gdjs.InGameCode.eventsList0x75ec14 = function(runtimeScene) {

{


{
gdjs.InGameCode.GDScoreObjects3.createFrom(runtimeScene.getObjects("Score"));
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.InGameCode.GDScoreObjects3.length ;i < len;++i) {
    gdjs.InGameCode.GDScoreObjects3[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.InGameCode.GDScoreObjects3.length ;i < len;++i) {
    gdjs.InGameCode.GDScoreObjects3[i].setTextAlignment("right");
}
}}

}


}; //End of gdjs.InGameCode.eventsList0x75ec14
gdjs.InGameCode.eventsList0x6b1924 = function(runtimeScene) {

{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Set UI Text"); }gdjs.InGameCode.eventsList0x75ec14(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Set UI Text"); }
}


{


gdjs.InGameCode.condition0IsTrue_0.val = false;
{
{gdjs.InGameCode.conditionTrue_1 = gdjs.InGameCode.condition0IsTrue_0;
gdjs.InGameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7494356);
}
}if (gdjs.InGameCode.condition0IsTrue_0.val) {
gdjs.InGameCode.GDCard1Objects3.createFrom(runtimeScene.getObjects("Card1"));
gdjs.InGameCode.GDGroundObjects3.createFrom(runtimeScene.getObjects("Ground"));
{for(var i = 0, len = gdjs.InGameCode.GDGroundObjects3.length ;i < len;++i) {
    gdjs.InGameCode.GDGroundObjects3[i].setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) * 1.5);
}
}{for(var i = 0, len = gdjs.InGameCode.GDGroundObjects3.length ;i < len;++i) {
    gdjs.InGameCode.GDGroundObjects3[i].setY(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) - (( gdjs.InGameCode.GDCard1Objects3.length === 0 ) ? 0 :gdjs.InGameCode.GDCard1Objects3[0].getHeight()) * 1.5);
}
}{for(var i = 0, len = gdjs.InGameCode.GDGroundObjects3.length ;i < len;++i) {
    gdjs.InGameCode.GDGroundObjects3[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.InGameCode.GDGroundObjects3[i].getWidth()) / 2);
}
}}

}


{


gdjs.InGameCode.condition0IsTrue_0.val = false;
{
{gdjs.InGameCode.conditionTrue_1 = gdjs.InGameCode.condition0IsTrue_0;
gdjs.InGameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8427076);
}
}if (gdjs.InGameCode.condition0IsTrue_0.val) {
gdjs.InGameCode.GDFinalPointObjects3.createFrom(runtimeScene.getObjects("FinalPoint"));
gdjs.InGameCode.GDGroundObjects3.createFrom(runtimeScene.getObjects("Ground"));
{for(var i = 0, len = gdjs.InGameCode.GDFinalPointObjects3.length ;i < len;++i) {
    gdjs.InGameCode.GDFinalPointObjects3[i].setX(-(150));
}
}{for(var i = 0, len = gdjs.InGameCode.GDFinalPointObjects3.length ;i < len;++i) {
    gdjs.InGameCode.GDFinalPointObjects3[i].setY((( gdjs.InGameCode.GDGroundObjects3.length === 0 ) ? 0 :gdjs.InGameCode.GDGroundObjects3[0].getY()) - 10);
}
}}

}


{


gdjs.InGameCode.condition0IsTrue_0.val = false;
{
{gdjs.InGameCode.conditionTrue_1 = gdjs.InGameCode.condition0IsTrue_0;
gdjs.InGameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7048572);
}
}if (gdjs.InGameCode.condition0IsTrue_0.val) {
gdjs.InGameCode.GDGroundObjects3.createFrom(runtimeScene.getObjects("Ground"));
gdjs.InGameCode.GDInitialPointObjects3.createFrom(runtimeScene.getObjects("InitialPoint"));
{for(var i = 0, len = gdjs.InGameCode.GDInitialPointObjects3.length ;i < len;++i) {
    gdjs.InGameCode.GDInitialPointObjects3[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + 150);
}
}{for(var i = 0, len = gdjs.InGameCode.GDInitialPointObjects3.length ;i < len;++i) {
    gdjs.InGameCode.GDInitialPointObjects3[i].setY((( gdjs.InGameCode.GDGroundObjects3.length === 0 ) ? 0 :gdjs.InGameCode.GDGroundObjects3[0].getY()) - 10);
}
}}

}


{


gdjs.InGameCode.condition0IsTrue_0.val = false;
{
{gdjs.InGameCode.conditionTrue_1 = gdjs.InGameCode.condition0IsTrue_0;
gdjs.InGameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7995620);
}
}if (gdjs.InGameCode.condition0IsTrue_0.val) {
gdjs.InGameCode.GDCard2Objects3.createFrom(runtimeScene.getObjects("Card2"));
{for(var i = 0, len = gdjs.InGameCode.GDCard2Objects3.length ;i < len;++i) {
    gdjs.InGameCode.GDCard2Objects3[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.InGameCode.GDCard2Objects3.length ;i < len;++i) {
    gdjs.InGameCode.GDCard2Objects3[i].setY(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) + ((gdjs.InGameCode.GDCard2Objects3[i].getHeight()) * 0.15));
}
}}

}


{


gdjs.InGameCode.condition0IsTrue_0.val = false;
{
{gdjs.InGameCode.conditionTrue_1 = gdjs.InGameCode.condition0IsTrue_0;
gdjs.InGameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7871460);
}
}if (gdjs.InGameCode.condition0IsTrue_0.val) {
gdjs.InGameCode.GDCard1Objects3.createFrom(runtimeScene.getObjects("Card1"));
{for(var i = 0, len = gdjs.InGameCode.GDCard1Objects3.length ;i < len;++i) {
    gdjs.InGameCode.GDCard1Objects3[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - 120);
}
}{for(var i = 0, len = gdjs.InGameCode.GDCard1Objects3.length ;i < len;++i) {
    gdjs.InGameCode.GDCard1Objects3[i].setY(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) + ((gdjs.InGameCode.GDCard1Objects3[i].getHeight()) * 0.15));
}
}}

}


{


gdjs.InGameCode.condition0IsTrue_0.val = false;
{
{gdjs.InGameCode.conditionTrue_1 = gdjs.InGameCode.condition0IsTrue_0;
gdjs.InGameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7592748);
}
}if (gdjs.InGameCode.condition0IsTrue_0.val) {
gdjs.InGameCode.GDCard3Objects2.createFrom(runtimeScene.getObjects("Card3"));
{for(var i = 0, len = gdjs.InGameCode.GDCard3Objects2.length ;i < len;++i) {
    gdjs.InGameCode.GDCard3Objects2[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 + 120);
}
}{for(var i = 0, len = gdjs.InGameCode.GDCard3Objects2.length ;i < len;++i) {
    gdjs.InGameCode.GDCard3Objects2[i].setY(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) + ((gdjs.InGameCode.GDCard3Objects2[i].getHeight()) * 0.15));
}
}}

}


}; //End of gdjs.InGameCode.eventsList0x6b1924
gdjs.InGameCode.eventsList0x80763c = function(runtimeScene) {

}; //End of gdjs.InGameCode.eventsList0x80763c
gdjs.InGameCode.mapOfGDgdjs_46InGameCode_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.InGameCode.GDPlayerObjects2});gdjs.InGameCode.eventsList0x803dcc = function(runtimeScene) {

{


gdjs.InGameCode.condition0IsTrue_0.val = false;
{
gdjs.InGameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.InGameCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "startGame");
}{runtimeScene.getVariables().getFromIndex(1).setNumber(5);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "pickerTimer");
}
{ //Subevents
gdjs.InGameCode.eventsList0x6b1924(runtimeScene);} //End of subevents
}

}


{


gdjs.InGameCode.repeatCount3 = 1;
for(gdjs.InGameCode.repeatIndex3 = 0;gdjs.InGameCode.repeatIndex3 < gdjs.InGameCode.repeatCount3;++gdjs.InGameCode.repeatIndex3) {

gdjs.InGameCode.condition0IsTrue_0.val = false;
gdjs.InGameCode.condition1IsTrue_0.val = false;
{
gdjs.InGameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "startGame");
}if ( gdjs.InGameCode.condition0IsTrue_0.val ) {
{
gdjs.InGameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) > 0;
}}
if (gdjs.InGameCode.condition1IsTrue_0.val)
{
{runtimeScene.getVariables().getFromIndex(1).sub(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "startGame");
}}
}

}


{


gdjs.InGameCode.condition0IsTrue_0.val = false;
gdjs.InGameCode.condition1IsTrue_0.val = false;
{
gdjs.InGameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 0;
}if ( gdjs.InGameCode.condition0IsTrue_0.val ) {
{
{gdjs.InGameCode.conditionTrue_1 = gdjs.InGameCode.condition1IsTrue_0;
gdjs.InGameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8447148);
}
}}
if (gdjs.InGameCode.condition1IsTrue_0.val) {
gdjs.InGameCode.GDStartTimerObjects2.createFrom(runtimeScene.getObjects("StartTimer"));
gdjs.InGameCode.GDPlayerObjects2.length = 0;

{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "startGame");
}{runtimeScene.getVariables().getFromIndex(2).setString("");
}{for(var i = 0, len = gdjs.InGameCode.GDStartTimerObjects2.length ;i < len;++i) {
    gdjs.InGameCode.GDStartTimerObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.InGameCode.mapOfGDgdjs_46InGameCode_46GDPlayerObjects2Objects, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2, 25, "");
}}

}


{


{
gdjs.InGameCode.GDStartTimerObjects1.createFrom(runtimeScene.getObjects("StartTimer"));
{for(var i = 0, len = gdjs.InGameCode.GDStartTimerObjects1.length ;i < len;++i) {
    gdjs.InGameCode.GDStartTimerObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1))));
}
}{for(var i = 0, len = gdjs.InGameCode.GDStartTimerObjects1.length ;i < len;++i) {
    gdjs.InGameCode.GDStartTimerObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.InGameCode.GDStartTimerObjects1[i].getWidth()) / 2);
}
}}

}


}; //End of gdjs.InGameCode.eventsList0x803dcc
gdjs.InGameCode.eventsList0x7c40d4 = function(runtimeScene) {

{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Generic Start"); }gdjs.InGameCode.eventsList0x803dcc(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Generic Start"); }
}


}; //End of gdjs.InGameCode.eventsList0x7c40d4
gdjs.InGameCode.eventsList0x6c875c = function(runtimeScene) {

}; //End of gdjs.InGameCode.eventsList0x6c875c
gdjs.InGameCode.eventsList0x801c24 = function(runtimeScene) {

{


gdjs.InGameCode.condition0IsTrue_0.val = false;
{
gdjs.InGameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4));
}if (gdjs.InGameCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}}

}


{


gdjs.InGameCode.condition0IsTrue_0.val = false;
{
gdjs.InGameCode.condition0IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)));
}if (gdjs.InGameCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}}

}


{


{
}

}


{


{
}

}


{


{
}

}


}; //End of gdjs.InGameCode.eventsList0x801c24
gdjs.InGameCode.eventsList0x75b394 = function(runtimeScene) {

}; //End of gdjs.InGameCode.eventsList0x75b394
gdjs.InGameCode.eventsList0x7a025c = function(runtimeScene) {

{


gdjs.InGameCode.condition0IsTrue_0.val = false;
gdjs.InGameCode.condition1IsTrue_0.val = false;
{
gdjs.InGameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(2)) == "";
}if ( gdjs.InGameCode.condition0IsTrue_0.val ) {
{
{gdjs.InGameCode.conditionTrue_1 = gdjs.InGameCode.condition1IsTrue_0;
gdjs.InGameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7177948);
}
}}
if (gdjs.InGameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "countdown");
}{runtimeScene.getVariables().getFromIndex(0).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)));
}}

}


{


gdjs.InGameCode.repeatCount3 = 1;
for(gdjs.InGameCode.repeatIndex3 = 0;gdjs.InGameCode.repeatIndex3 < gdjs.InGameCode.repeatCount3;++gdjs.InGameCode.repeatIndex3) {

gdjs.InGameCode.condition0IsTrue_0.val = false;
gdjs.InGameCode.condition1IsTrue_0.val = false;
gdjs.InGameCode.condition2IsTrue_0.val = false;
{
gdjs.InGameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "countdown");
}if ( gdjs.InGameCode.condition0IsTrue_0.val ) {
{
gdjs.InGameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) > 0;
}if ( gdjs.InGameCode.condition1IsTrue_0.val ) {
{
gdjs.InGameCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(2)) == "";
}}
}
if (gdjs.InGameCode.condition2IsTrue_0.val)
{
{runtimeScene.getVariables().getFromIndex(0).sub(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "countdown");
}}
}

}


{


gdjs.InGameCode.condition0IsTrue_0.val = false;
{
gdjs.InGameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}if (gdjs.InGameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(3).setNumber(1);
}
{ //Subevents
gdjs.InGameCode.eventsList0x801c24(runtimeScene);} //End of subevents
}

}


{


gdjs.InGameCode.condition0IsTrue_0.val = false;
{
gdjs.InGameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(2)) == "";
}if (gdjs.InGameCode.condition0IsTrue_0.val) {
gdjs.InGameCode.GDTimerObjects2.createFrom(runtimeScene.getObjects("Timer"));
{for(var i = 0, len = gdjs.InGameCode.GDTimerObjects2.length ;i < len;++i) {
    gdjs.InGameCode.GDTimerObjects2[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}
}}

}


{


gdjs.InGameCode.repeatCount2 = 1;
for(gdjs.InGameCode.repeatIndex2 = 0;gdjs.InGameCode.repeatIndex2 < gdjs.InGameCode.repeatCount2;++gdjs.InGameCode.repeatIndex2) {

gdjs.InGameCode.condition0IsTrue_0.val = false;
gdjs.InGameCode.condition1IsTrue_0.val = false;
{
gdjs.InGameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "timerToDie");
}if ( gdjs.InGameCode.condition0IsTrue_0.val ) {
{
gdjs.InGameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
}}
if (gdjs.InGameCode.condition1IsTrue_0.val)
{
{runtimeScene.getVariables().getFromIndex(3).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "countdown");
}}
}

}


}; //End of gdjs.InGameCode.eventsList0x7a025c
gdjs.InGameCode.eventsList0x7bfc24 = function(runtimeScene) {

{


gdjs.InGameCode.condition0IsTrue_0.val = false;
{
gdjs.InGameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 1;
}if (gdjs.InGameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "WinOrLose", false);
}}

}


}; //End of gdjs.InGameCode.eventsList0x7bfc24
gdjs.InGameCode.eventsList0x781024 = function(runtimeScene) {

}; //End of gdjs.InGameCode.eventsList0x781024
gdjs.InGameCode.mapOfGDgdjs_46InGameCode_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.InGameCode.GDPlayerObjects2});gdjs.InGameCode.mapOfGDgdjs_46InGameCode_46GDGroundObjects2Objects = Hashtable.newFrom({"Ground": gdjs.InGameCode.GDGroundObjects2});gdjs.InGameCode.mapOfGDgdjs_46InGameCode_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.InGameCode.GDPlayerObjects2});gdjs.InGameCode.mapOfGDgdjs_46InGameCode_46GDfruit1Objects2ObjectsGDgdjs_46InGameCode_46GDfruit2Objects2ObjectsGDgdjs_46InGameCode_46GDfruit0Objects2Objects = Hashtable.newFrom({"fruit1": gdjs.InGameCode.GDfruit1Objects2, "fruit2": gdjs.InGameCode.GDfruit2Objects2, "fruit0": gdjs.InGameCode.GDfruit0Objects2});gdjs.InGameCode.mapOfGDgdjs_46InGameCode_46GDCard1Objects2ObjectsGDgdjs_46InGameCode_46GDCard2Objects2ObjectsGDgdjs_46InGameCode_46GDCard3Objects2Objects = Hashtable.newFrom({"Card1": gdjs.InGameCode.GDCard1Objects2, "Card2": gdjs.InGameCode.GDCard2Objects2, "Card3": gdjs.InGameCode.GDCard3Objects2});gdjs.InGameCode.eventsList0x80e3c4 = function(runtimeScene) {

{


{
gdjs.InGameCode.GDCard1Objects3.createFrom(runtimeScene.getObjects("Card1"));
gdjs.InGameCode.GDCard2Objects3.createFrom(runtimeScene.getObjects("Card2"));
gdjs.InGameCode.GDCard3Objects3.createFrom(runtimeScene.getObjects("Card3"));
{for(var i = 0, len = gdjs.InGameCode.GDCard1Objects3.length ;i < len;++i) {
    gdjs.InGameCode.GDCard1Objects3[i].setScale(1);
}
for(var i = 0, len = gdjs.InGameCode.GDCard2Objects3.length ;i < len;++i) {
    gdjs.InGameCode.GDCard2Objects3[i].setScale(1);
}
for(var i = 0, len = gdjs.InGameCode.GDCard3Objects3.length ;i < len;++i) {
    gdjs.InGameCode.GDCard3Objects3[i].setScale(1);
}
}}

}


{

gdjs.InGameCode.GDCard1Objects2.createFrom(runtimeScene.getObjects("Card1"));
gdjs.InGameCode.GDCard2Objects2.createFrom(runtimeScene.getObjects("Card2"));
gdjs.InGameCode.GDCard3Objects2.createFrom(runtimeScene.getObjects("Card3"));

gdjs.InGameCode.condition0IsTrue_0.val = false;
{
gdjs.InGameCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickRandomObject(runtimeScene, gdjs.InGameCode.mapOfGDgdjs_46InGameCode_46GDCard1Objects2ObjectsGDgdjs_46InGameCode_46GDCard2Objects2ObjectsGDgdjs_46InGameCode_46GDCard3Objects2Objects);
}if (gdjs.InGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.InGameCode.GDCard1Objects2 */
/* Reuse gdjs.InGameCode.GDCard2Objects2 */
/* Reuse gdjs.InGameCode.GDCard3Objects2 */
/* Reuse gdjs.InGameCode.GDDebuggerObjects2 */
{runtimeScene.getVariables().getFromIndex(6).setString((gdjs.RuntimeObject.getVariableString(((gdjs.InGameCode.GDCard3Objects2.length === 0 ) ? ((gdjs.InGameCode.GDCard2Objects2.length === 0 ) ? ((gdjs.InGameCode.GDCard1Objects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.InGameCode.GDCard1Objects2[0].getVariables()) : gdjs.InGameCode.GDCard2Objects2[0].getVariables()) : gdjs.InGameCode.GDCard3Objects2[0].getVariables()).get("fruitID"))));
}{for(var i = 0, len = gdjs.InGameCode.GDDebuggerObjects2.length ;i < len;++i) {
    gdjs.InGameCode.GDDebuggerObjects2[i].setString(gdjs.InGameCode.GDDebuggerObjects2[i].getString() + (" " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(6))));
}
}{for(var i = 0, len = gdjs.InGameCode.GDCard1Objects2.length ;i < len;++i) {
    gdjs.InGameCode.GDCard1Objects2[i].setScale(1.3);
}
for(var i = 0, len = gdjs.InGameCode.GDCard2Objects2.length ;i < len;++i) {
    gdjs.InGameCode.GDCard2Objects2[i].setScale(1.3);
}
for(var i = 0, len = gdjs.InGameCode.GDCard3Objects2.length ;i < len;++i) {
    gdjs.InGameCode.GDCard3Objects2[i].setScale(1.3);
}
}}

}


}; //End of gdjs.InGameCode.eventsList0x80e3c4
gdjs.InGameCode.eventsList0x801e3c = function(runtimeScene) {

{


{

{ //Subevents
gdjs.InGameCode.eventsList0x80e3c4(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.InGameCode.eventsList0x801e3c
gdjs.InGameCode.eventsList0x6b6404 = function(runtimeScene) {

{

gdjs.InGameCode.GDfruit0Objects3.createFrom(gdjs.InGameCode.GDfruit0Objects2);

gdjs.InGameCode.GDfruit1Objects3.createFrom(gdjs.InGameCode.GDfruit1Objects2);

gdjs.InGameCode.GDfruit2Objects3.createFrom(gdjs.InGameCode.GDfruit2Objects2);


gdjs.InGameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.InGameCode.GDfruit1Objects3.length;i<l;++i) {
    if ( gdjs.InGameCode.GDfruit1Objects3[i].getVariableString(gdjs.InGameCode.GDfruit1Objects3[i].getVariables().get("fruitID")) != gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(6)) ) {
        gdjs.InGameCode.condition0IsTrue_0.val = true;
        gdjs.InGameCode.GDfruit1Objects3[k] = gdjs.InGameCode.GDfruit1Objects3[i];
        ++k;
    }
}
gdjs.InGameCode.GDfruit1Objects3.length = k;for(var i = 0, k = 0, l = gdjs.InGameCode.GDfruit2Objects3.length;i<l;++i) {
    if ( gdjs.InGameCode.GDfruit2Objects3[i].getVariableString(gdjs.InGameCode.GDfruit2Objects3[i].getVariables().get("fruitID")) != gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(6)) ) {
        gdjs.InGameCode.condition0IsTrue_0.val = true;
        gdjs.InGameCode.GDfruit2Objects3[k] = gdjs.InGameCode.GDfruit2Objects3[i];
        ++k;
    }
}
gdjs.InGameCode.GDfruit2Objects3.length = k;for(var i = 0, k = 0, l = gdjs.InGameCode.GDfruit0Objects3.length;i<l;++i) {
    if ( gdjs.InGameCode.GDfruit0Objects3[i].getVariableString(gdjs.InGameCode.GDfruit0Objects3[i].getVariables().get("fruitID")) != gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(6)) ) {
        gdjs.InGameCode.condition0IsTrue_0.val = true;
        gdjs.InGameCode.GDfruit0Objects3[k] = gdjs.InGameCode.GDfruit0Objects3[i];
        ++k;
    }
}
gdjs.InGameCode.GDfruit0Objects3.length = k;}if (gdjs.InGameCode.condition0IsTrue_0.val) {
gdjs.InGameCode.GDDebuggerObjects3.createFrom(runtimeScene.getObjects("Debugger"));
{gdjs.evtTools.sound.playSound(runtimeScene, "FruitCorrect.wav", false, 150, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Incorrect.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.InGameCode.GDDebuggerObjects3.length ;i < len;++i) {
    gdjs.InGameCode.GDDebuggerObjects3[i].setString(gdjs.InGameCode.GDDebuggerObjects3[i].getString() + (" Incorrect"));
}
}}

}


{

/* Reuse gdjs.InGameCode.GDfruit0Objects2 */
/* Reuse gdjs.InGameCode.GDfruit1Objects2 */
/* Reuse gdjs.InGameCode.GDfruit2Objects2 */

gdjs.InGameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.InGameCode.GDfruit1Objects2.length;i<l;++i) {
    if ( gdjs.InGameCode.GDfruit1Objects2[i].getVariableString(gdjs.InGameCode.GDfruit1Objects2[i].getVariables().get("fruitID")) == gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(6)) ) {
        gdjs.InGameCode.condition0IsTrue_0.val = true;
        gdjs.InGameCode.GDfruit1Objects2[k] = gdjs.InGameCode.GDfruit1Objects2[i];
        ++k;
    }
}
gdjs.InGameCode.GDfruit1Objects2.length = k;for(var i = 0, k = 0, l = gdjs.InGameCode.GDfruit2Objects2.length;i<l;++i) {
    if ( gdjs.InGameCode.GDfruit2Objects2[i].getVariableString(gdjs.InGameCode.GDfruit2Objects2[i].getVariables().get("fruitID")) == gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(6)) ) {
        gdjs.InGameCode.condition0IsTrue_0.val = true;
        gdjs.InGameCode.GDfruit2Objects2[k] = gdjs.InGameCode.GDfruit2Objects2[i];
        ++k;
    }
}
gdjs.InGameCode.GDfruit2Objects2.length = k;for(var i = 0, k = 0, l = gdjs.InGameCode.GDfruit0Objects2.length;i<l;++i) {
    if ( gdjs.InGameCode.GDfruit0Objects2[i].getVariableString(gdjs.InGameCode.GDfruit0Objects2[i].getVariables().get("fruitID")) == gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(6)) ) {
        gdjs.InGameCode.condition0IsTrue_0.val = true;
        gdjs.InGameCode.GDfruit0Objects2[k] = gdjs.InGameCode.GDfruit0Objects2[i];
        ++k;
    }
}
gdjs.InGameCode.GDfruit0Objects2.length = k;}if (gdjs.InGameCode.condition0IsTrue_0.val) {
gdjs.InGameCode.GDDebuggerObjects2.createFrom(runtimeScene.getObjects("Debugger"));
gdjs.InGameCode.GDScoreObjects2.createFrom(runtimeScene.getObjects("Score"));
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.InGameCode.GDScoreObjects2.length ;i < len;++i) {
    gdjs.InGameCode.GDScoreObjects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "FruitCorrect.wav", false, 150, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "476178__unadamlar__correct-choice.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.InGameCode.GDDebuggerObjects2.length ;i < len;++i) {
    gdjs.InGameCode.GDDebuggerObjects2[i].setString(gdjs.InGameCode.GDDebuggerObjects2[i].getString() + (" Correct"));
}
}
{ //Subevents
gdjs.InGameCode.eventsList0x801e3c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.InGameCode.eventsList0x6b6404
gdjs.InGameCode.eventsList0x80751c = function(runtimeScene) {

{

/* Reuse gdjs.InGameCode.GDPlayerObjects2 */
gdjs.InGameCode.GDfruit0Objects2.createFrom(runtimeScene.getObjects("fruit0"));
gdjs.InGameCode.GDfruit1Objects2.createFrom(runtimeScene.getObjects("fruit1"));
gdjs.InGameCode.GDfruit2Objects2.createFrom(runtimeScene.getObjects("fruit2"));

gdjs.InGameCode.condition0IsTrue_0.val = false;
gdjs.InGameCode.condition1IsTrue_0.val = false;
gdjs.InGameCode.condition2IsTrue_0.val = false;
{
gdjs.InGameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.InGameCode.mapOfGDgdjs_46InGameCode_46GDPlayerObjects2Objects, gdjs.InGameCode.mapOfGDgdjs_46InGameCode_46GDfruit1Objects2ObjectsGDgdjs_46InGameCode_46GDfruit2Objects2ObjectsGDgdjs_46InGameCode_46GDfruit0Objects2Objects, false, runtimeScene, false);
}if ( gdjs.InGameCode.condition0IsTrue_0.val ) {
{
gdjs.InGameCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "pickerTimer");
}if ( gdjs.InGameCode.condition1IsTrue_0.val ) {
{
{gdjs.InGameCode.conditionTrue_1 = gdjs.InGameCode.condition2IsTrue_0;
gdjs.InGameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7717844);
}
}}
}
if (gdjs.InGameCode.condition2IsTrue_0.val) {
/* Reuse gdjs.InGameCode.GDPlayerObjects2 */
/* Reuse gdjs.InGameCode.GDfruit0Objects2 */
/* Reuse gdjs.InGameCode.GDfruit1Objects2 */
/* Reuse gdjs.InGameCode.GDfruit2Objects2 */
{for(var i = 0, len = gdjs.InGameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.InGameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.InGameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.InGameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.InGameCode.GDfruit1Objects2.length ;i < len;++i) {
    gdjs.InGameCode.GDfruit1Objects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.InGameCode.GDfruit2Objects2.length ;i < len;++i) {
    gdjs.InGameCode.GDfruit2Objects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.InGameCode.GDfruit0Objects2.length ;i < len;++i) {
    gdjs.InGameCode.GDfruit0Objects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "pickerTimer");
}
{ //Subevents
gdjs.InGameCode.eventsList0x6b6404(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.InGameCode.eventsList0x80751c
gdjs.InGameCode.eventsList0x7c43cc = function(runtimeScene) {

{

gdjs.InGameCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.InGameCode.condition0IsTrue_0.val = false;
gdjs.InGameCode.condition1IsTrue_0.val = false;
{
gdjs.InGameCode.condition0IsTrue_0.val = gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) < (( gdjs.InGameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.InGameCode.GDPlayerObjects2[0].getPointX("")) - 2;
}if ( gdjs.InGameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.InGameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.InGameCode.GDPlayerObjects2[i].getX() > 0 ) {
        gdjs.InGameCode.condition1IsTrue_0.val = true;
        gdjs.InGameCode.GDPlayerObjects2[k] = gdjs.InGameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.InGameCode.GDPlayerObjects2.length = k;}}
if (gdjs.InGameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.InGameCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.InGameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.InGameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.InGameCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.InGameCode.condition0IsTrue_0.val = false;
gdjs.InGameCode.condition1IsTrue_0.val = false;
{
gdjs.InGameCode.condition0IsTrue_0.val = gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) > (( gdjs.InGameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.InGameCode.GDPlayerObjects1[0].getPointX("")) + 2;
}if ( gdjs.InGameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.InGameCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.InGameCode.GDPlayerObjects1[i].getX() < gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - ((gdjs.InGameCode.GDPlayerObjects1[i].getWidth()) * 2) ) {
        gdjs.InGameCode.condition1IsTrue_0.val = true;
        gdjs.InGameCode.GDPlayerObjects1[k] = gdjs.InGameCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.InGameCode.GDPlayerObjects1.length = k;}}
if (gdjs.InGameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.InGameCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.InGameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.InGameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


}; //End of gdjs.InGameCode.eventsList0x7c43cc
gdjs.InGameCode.eventsList0x8071d4 = function(runtimeScene) {

{

gdjs.InGameCode.GDGroundObjects2.createFrom(runtimeScene.getObjects("Ground"));
gdjs.InGameCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.InGameCode.condition0IsTrue_0.val = false;
{
gdjs.InGameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.InGameCode.mapOfGDgdjs_46InGameCode_46GDPlayerObjects2Objects, gdjs.InGameCode.mapOfGDgdjs_46InGameCode_46GDGroundObjects2Objects, false, runtimeScene, false);
}if (gdjs.InGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.InGameCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.InGameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.InGameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.InGameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.InGameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Lose.wav", false, 150, 0.8);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timerToDie");
}}

}


{

gdjs.InGameCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.InGameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.InGameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.InGameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.InGameCode.condition0IsTrue_0.val = true;
        gdjs.InGameCode.GDPlayerObjects2[k] = gdjs.InGameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.InGameCode.GDPlayerObjects2.length = k;}if (gdjs.InGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.InGameCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.InGameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.InGameCode.GDPlayerObjects2[i].setAnimationName("Jumping");
}
}{for(var i = 0, len = gdjs.InGameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.InGameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.InGameCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.InGameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.InGameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.InGameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.InGameCode.condition0IsTrue_0.val = true;
        gdjs.InGameCode.GDPlayerObjects2[k] = gdjs.InGameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.InGameCode.GDPlayerObjects2.length = k;}if (gdjs.InGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.InGameCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.InGameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.InGameCode.GDPlayerObjects2[i].setAnimationName("Falling");
}
}
{ //Subevents
gdjs.InGameCode.eventsList0x80751c(runtimeScene);} //End of subevents
}

}


{

gdjs.InGameCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.InGameCode.condition0IsTrue_0.val = false;
gdjs.InGameCode.condition1IsTrue_0.val = false;
{
gdjs.InGameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if ( gdjs.InGameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.InGameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.InGameCode.GDPlayerObjects2[i].getX() > 0 ) {
        gdjs.InGameCode.condition1IsTrue_0.val = true;
        gdjs.InGameCode.GDPlayerObjects2[k] = gdjs.InGameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.InGameCode.GDPlayerObjects2.length = k;}}
if (gdjs.InGameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.InGameCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.InGameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.InGameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.InGameCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.InGameCode.condition0IsTrue_0.val = false;
gdjs.InGameCode.condition1IsTrue_0.val = false;
{
gdjs.InGameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if ( gdjs.InGameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.InGameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.InGameCode.GDPlayerObjects2[i].getX() < gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - ((gdjs.InGameCode.GDPlayerObjects2[i].getWidth()) * 2) ) {
        gdjs.InGameCode.condition1IsTrue_0.val = true;
        gdjs.InGameCode.GDPlayerObjects2[k] = gdjs.InGameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.InGameCode.GDPlayerObjects2.length = k;}}
if (gdjs.InGameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.InGameCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.InGameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.InGameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{


gdjs.InGameCode.condition0IsTrue_0.val = false;
{
gdjs.InGameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.InGameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.InGameCode.eventsList0x7c43cc(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.InGameCode.eventsList0x8071d4
gdjs.InGameCode.eventsList0x810514 = function(runtimeScene) {

{


gdjs.InGameCode.condition0IsTrue_0.val = false;
{
gdjs.InGameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 1;
}if (gdjs.InGameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.InGameCode.eventsList0x8071d4(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.InGameCode.eventsList0x810514
gdjs.InGameCode.mapOfGDgdjs_46InGameCode_46GDfruit1Objects1ObjectsGDgdjs_46InGameCode_46GDfruit2Objects1ObjectsGDgdjs_46InGameCode_46GDfruit0Objects1Objects = Hashtable.newFrom({"fruit1": gdjs.InGameCode.GDfruit1Objects1, "fruit2": gdjs.InGameCode.GDfruit2Objects1, "fruit0": gdjs.InGameCode.GDfruit0Objects1});gdjs.InGameCode.mapOfGDgdjs_46InGameCode_46GDFinalPointObjects1Objects = Hashtable.newFrom({"FinalPoint": gdjs.InGameCode.GDFinalPointObjects1});gdjs.InGameCode.eventsList0x7e0bcc = function(runtimeScene) {

{


{
gdjs.InGameCode.GDFinalPointObjects2.createFrom(runtimeScene.getObjects("FinalPoint"));
gdjs.InGameCode.GDfruit0Objects2.createFrom(runtimeScene.getObjects("fruit0"));
gdjs.InGameCode.GDfruit1Objects2.createFrom(runtimeScene.getObjects("fruit1"));
gdjs.InGameCode.GDfruit2Objects2.createFrom(runtimeScene.getObjects("fruit2"));
{for(var i = 0, len = gdjs.InGameCode.GDfruit1Objects2.length ;i < len;++i) {
    gdjs.InGameCode.GDfruit1Objects2[i].addForceTowardPosition((( gdjs.InGameCode.GDFinalPointObjects2.length === 0 ) ? 0 :gdjs.InGameCode.GDFinalPointObjects2[0].getPointX("")), (( gdjs.InGameCode.GDFinalPointObjects2.length === 0 ) ? 0 :gdjs.InGameCode.GDFinalPointObjects2[0].getPointY("")), 210, 0);
}
for(var i = 0, len = gdjs.InGameCode.GDfruit2Objects2.length ;i < len;++i) {
    gdjs.InGameCode.GDfruit2Objects2[i].addForceTowardPosition((( gdjs.InGameCode.GDFinalPointObjects2.length === 0 ) ? 0 :gdjs.InGameCode.GDFinalPointObjects2[0].getPointX("")), (( gdjs.InGameCode.GDFinalPointObjects2.length === 0 ) ? 0 :gdjs.InGameCode.GDFinalPointObjects2[0].getPointY("")), 210, 0);
}
for(var i = 0, len = gdjs.InGameCode.GDfruit0Objects2.length ;i < len;++i) {
    gdjs.InGameCode.GDfruit0Objects2[i].addForceTowardPosition((( gdjs.InGameCode.GDFinalPointObjects2.length === 0 ) ? 0 :gdjs.InGameCode.GDFinalPointObjects2[0].getPointX("")), (( gdjs.InGameCode.GDFinalPointObjects2.length === 0 ) ? 0 :gdjs.InGameCode.GDFinalPointObjects2[0].getPointY("")), 210, 0);
}
}}

}


{

gdjs.InGameCode.GDFinalPointObjects1.createFrom(runtimeScene.getObjects("FinalPoint"));
gdjs.InGameCode.GDfruit0Objects1.createFrom(runtimeScene.getObjects("fruit0"));
gdjs.InGameCode.GDfruit1Objects1.createFrom(runtimeScene.getObjects("fruit1"));
gdjs.InGameCode.GDfruit2Objects1.createFrom(runtimeScene.getObjects("fruit2"));

gdjs.InGameCode.condition0IsTrue_0.val = false;
{
gdjs.InGameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.InGameCode.mapOfGDgdjs_46InGameCode_46GDfruit1Objects1ObjectsGDgdjs_46InGameCode_46GDfruit2Objects1ObjectsGDgdjs_46InGameCode_46GDfruit0Objects1Objects, gdjs.InGameCode.mapOfGDgdjs_46InGameCode_46GDFinalPointObjects1Objects, false, runtimeScene, false);
}if (gdjs.InGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.InGameCode.GDfruit0Objects1 */
/* Reuse gdjs.InGameCode.GDfruit1Objects1 */
/* Reuse gdjs.InGameCode.GDfruit2Objects1 */
{for(var i = 0, len = gdjs.InGameCode.GDfruit1Objects1.length ;i < len;++i) {
    gdjs.InGameCode.GDfruit1Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.InGameCode.GDfruit2Objects1.length ;i < len;++i) {
    gdjs.InGameCode.GDfruit2Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.InGameCode.GDfruit0Objects1.length ;i < len;++i) {
    gdjs.InGameCode.GDfruit0Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


}; //End of gdjs.InGameCode.eventsList0x7e0bcc
gdjs.InGameCode.mapOfGDgdjs_46InGameCode_46GDCard1Objects1ObjectsGDgdjs_46InGameCode_46GDCard2Objects1ObjectsGDgdjs_46InGameCode_46GDCard3Objects1Objects = Hashtable.newFrom({"Card1": gdjs.InGameCode.GDCard1Objects1, "Card2": gdjs.InGameCode.GDCard2Objects1, "Card3": gdjs.InGameCode.GDCard3Objects1});gdjs.InGameCode.eventsList0x761dac = function(runtimeScene) {

{


{
gdjs.InGameCode.GDCard1Objects2.createFrom(runtimeScene.getObjects("Card1"));
gdjs.InGameCode.GDCard2Objects2.createFrom(runtimeScene.getObjects("Card2"));
gdjs.InGameCode.GDCard3Objects2.createFrom(runtimeScene.getObjects("Card3"));
{for(var i = 0, len = gdjs.InGameCode.GDCard1Objects2.length ;i < len;++i) {
    gdjs.InGameCode.GDCard1Objects2[i].setScale(1);
}
for(var i = 0, len = gdjs.InGameCode.GDCard2Objects2.length ;i < len;++i) {
    gdjs.InGameCode.GDCard2Objects2[i].setScale(1);
}
for(var i = 0, len = gdjs.InGameCode.GDCard3Objects2.length ;i < len;++i) {
    gdjs.InGameCode.GDCard3Objects2[i].setScale(1);
}
}}

}


{

gdjs.InGameCode.GDCard1Objects1.createFrom(runtimeScene.getObjects("Card1"));
gdjs.InGameCode.GDCard2Objects1.createFrom(runtimeScene.getObjects("Card2"));
gdjs.InGameCode.GDCard3Objects1.createFrom(runtimeScene.getObjects("Card3"));

gdjs.InGameCode.condition0IsTrue_0.val = false;
{
gdjs.InGameCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickRandomObject(runtimeScene, gdjs.InGameCode.mapOfGDgdjs_46InGameCode_46GDCard1Objects1ObjectsGDgdjs_46InGameCode_46GDCard2Objects1ObjectsGDgdjs_46InGameCode_46GDCard3Objects1Objects);
}if (gdjs.InGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.InGameCode.GDCard1Objects1 */
/* Reuse gdjs.InGameCode.GDCard2Objects1 */
/* Reuse gdjs.InGameCode.GDCard3Objects1 */
{runtimeScene.getVariables().getFromIndex(6).setString((gdjs.RuntimeObject.getVariableString(((gdjs.InGameCode.GDCard3Objects1.length === 0 ) ? ((gdjs.InGameCode.GDCard2Objects1.length === 0 ) ? ((gdjs.InGameCode.GDCard1Objects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.InGameCode.GDCard1Objects1[0].getVariables()) : gdjs.InGameCode.GDCard2Objects1[0].getVariables()) : gdjs.InGameCode.GDCard3Objects1[0].getVariables()).get("fruitID"))));
}{for(var i = 0, len = gdjs.InGameCode.GDCard1Objects1.length ;i < len;++i) {
    gdjs.InGameCode.GDCard1Objects1[i].setScale(1.3);
}
for(var i = 0, len = gdjs.InGameCode.GDCard2Objects1.length ;i < len;++i) {
    gdjs.InGameCode.GDCard2Objects1[i].setScale(1.3);
}
for(var i = 0, len = gdjs.InGameCode.GDCard3Objects1.length ;i < len;++i) {
    gdjs.InGameCode.GDCard3Objects1[i].setScale(1.3);
}
}}

}


}; //End of gdjs.InGameCode.eventsList0x761dac
gdjs.InGameCode.eventsList0x760884 = function(runtimeScene) {

{


{

{ //Subevents
gdjs.InGameCode.eventsList0x761dac(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.InGameCode.eventsList0x760884
gdjs.InGameCode.eventsList0x781dac = function(runtimeScene) {

{


gdjs.InGameCode.condition0IsTrue_0.val = false;
{
gdjs.InGameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.InGameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.InGameCode.eventsList0x760884(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.InGameCode.eventsList0x781dac
gdjs.InGameCode.mapOfGDgdjs_46InGameCode_46GDfruit1Objects1ObjectsGDgdjs_46InGameCode_46GDfruit2Objects1ObjectsGDgdjs_46InGameCode_46GDfruit0Objects1Objects = Hashtable.newFrom({"fruit1": gdjs.InGameCode.GDfruit1Objects1, "fruit2": gdjs.InGameCode.GDfruit2Objects1, "fruit0": gdjs.InGameCode.GDfruit0Objects1});gdjs.InGameCode.eventsList0x7829d4 = function(runtimeScene) {

{


gdjs.InGameCode.condition0IsTrue_0.val = false;
{
{gdjs.InGameCode.conditionTrue_1 = gdjs.InGameCode.condition0IsTrue_0;
gdjs.InGameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8580772);
}
}if (gdjs.InGameCode.condition0IsTrue_0.val) {
gdjs.InGameCode.GDInitialPointObjects1.createFrom(runtimeScene.getObjects("InitialPoint"));
gdjs.InGameCode.GDfruit0Objects1.length = 0;

gdjs.InGameCode.GDfruit1Objects1.length = 0;

gdjs.InGameCode.GDfruit2Objects1.length = 0;

{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.InGameCode.mapOfGDgdjs_46InGameCode_46GDfruit1Objects1ObjectsGDgdjs_46InGameCode_46GDfruit2Objects1ObjectsGDgdjs_46InGameCode_46GDfruit0Objects1Objects, "fruit" + gdjs.evtTools.common.toString(gdjs.random(2)), (( gdjs.InGameCode.GDInitialPointObjects1.length === 0 ) ? 0 :gdjs.InGameCode.GDInitialPointObjects1[0].getPointX("")), (( gdjs.InGameCode.GDInitialPointObjects1.length === 0 ) ? 0 :gdjs.InGameCode.GDInitialPointObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.InGameCode.GDfruit1Objects1.length ;i < len;++i) {
    gdjs.InGameCode.GDfruit1Objects1[i].setScale(1);
}
for(var i = 0, len = gdjs.InGameCode.GDfruit2Objects1.length ;i < len;++i) {
    gdjs.InGameCode.GDfruit2Objects1[i].setScale(1);
}
for(var i = 0, len = gdjs.InGameCode.GDfruit0Objects1.length ;i < len;++i) {
    gdjs.InGameCode.GDfruit0Objects1[i].setScale(1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "fruitgenerator");
}}

}


}; //End of gdjs.InGameCode.eventsList0x7829d4
gdjs.InGameCode.eventsList0x7a0534 = function(runtimeScene) {

{


gdjs.InGameCode.condition0IsTrue_0.val = false;
{
gdjs.InGameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.randomFloatInRange(0.8, 1.2), "fruitgenerator");
}if (gdjs.InGameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.InGameCode.eventsList0x7829d4(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.InGameCode.eventsList0x7a0534
gdjs.InGameCode.eventsList0x7c492c = function(runtimeScene) {

{


{
{runtimeScene.getVariables().get("AllSlotsPair").setNumber(1);
}}

}


{


{
{runtimeScene.getVariables().get("AllSlotsPair").setNumber(0);
}}

}


{


gdjs.InGameCode.condition0IsTrue_0.val = false;
gdjs.InGameCode.condition1IsTrue_0.val = false;
{
gdjs.InGameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("AllSlotsPair")) == 1;
}if ( gdjs.InGameCode.condition0IsTrue_0.val ) {
{
gdjs.InGameCode.condition1IsTrue_0.val = !(gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene));
}}
if (gdjs.InGameCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}{runtimeScene.getVariables().getFromIndex(3).setNumber(1);
}}

}


}; //End of gdjs.InGameCode.eventsList0x7c492c
gdjs.InGameCode.eventsList0xb4be0 = function(runtimeScene) {

{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Colors"); }gdjs.InGameCode.eventsList0x690a2c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Colors"); }
}


{


{

{ //Subevents
gdjs.InGameCode.eventsList0x6b19fc(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.InGameCode.condition0IsTrue_0.val = false;
{
{gdjs.InGameCode.conditionTrue_1 = gdjs.InGameCode.condition0IsTrue_0;
gdjs.InGameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7033412);
}
}if (gdjs.InGameCode.condition0IsTrue_0.val) {
gdjs.InGameCode.GDScoreObjects1.createFrom(runtimeScene.getObjects("Score"));
{for(var i = 0, len = gdjs.InGameCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.InGameCode.GDScoreObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.InGameCode.GDScoreObjects1[i].getWidth()) - (gdjs.InGameCode.GDScoreObjects1[i].getWidth()) / 2);
}
}}

}


{


gdjs.InGameCode.condition0IsTrue_0.val = false;
{
{gdjs.InGameCode.conditionTrue_1 = gdjs.InGameCode.condition0IsTrue_0;
gdjs.InGameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7727116);
}
}if (gdjs.InGameCode.condition0IsTrue_0.val) {
gdjs.InGameCode.GDTimerObjects1.createFrom(runtimeScene.getObjects("Timer"));
{for(var i = 0, len = gdjs.InGameCode.GDTimerObjects1.length ;i < len;++i) {
    gdjs.InGameCode.GDTimerObjects1[i].setX(0 + (gdjs.InGameCode.GDTimerObjects1[i].getWidth()) + (gdjs.InGameCode.GDTimerObjects1[i].getWidth()) / 2);
}
}}

}


{



}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("StartGame"); }gdjs.InGameCode.eventsList0x7c40d4(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("StartGame"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Timer"); }gdjs.InGameCode.eventsList0x7a025c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Timer"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("FinalGame"); }gdjs.InGameCode.eventsList0x7bfc24(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("FinalGame"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Debugger"); }gdjs.InGameCode.eventsList0x781024(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Debugger"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Player"); }gdjs.InGameCode.eventsList0x810514(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Player"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("MoveFruits"); }gdjs.InGameCode.eventsList0x7e0bcc(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("MoveFruits"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("PickFruit"); }gdjs.InGameCode.eventsList0x781dac(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("PickFruit"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Generate Fruits"); }gdjs.InGameCode.eventsList0x7a0534(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Generate Fruits"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("CheckWinGame"); }gdjs.InGameCode.eventsList0x7c492c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("CheckWinGame"); }
}


}; //End of gdjs.InGameCode.eventsList0xb4be0


gdjs.InGameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.InGameCode.GDScoreObjects1.length = 0;
gdjs.InGameCode.GDScoreObjects2.length = 0;
gdjs.InGameCode.GDScoreObjects3.length = 0;
gdjs.InGameCode.GDScoreObjects4.length = 0;
gdjs.InGameCode.GDCountDownObjects1.length = 0;
gdjs.InGameCode.GDCountDownObjects2.length = 0;
gdjs.InGameCode.GDCountDownObjects3.length = 0;
gdjs.InGameCode.GDCountDownObjects4.length = 0;
gdjs.InGameCode.GDStartTimerObjects1.length = 0;
gdjs.InGameCode.GDStartTimerObjects2.length = 0;
gdjs.InGameCode.GDStartTimerObjects3.length = 0;
gdjs.InGameCode.GDStartTimerObjects4.length = 0;
gdjs.InGameCode.GDTimerObjects1.length = 0;
gdjs.InGameCode.GDTimerObjects2.length = 0;
gdjs.InGameCode.GDTimerObjects3.length = 0;
gdjs.InGameCode.GDTimerObjects4.length = 0;
gdjs.InGameCode.GDBackgroundObjects1.length = 0;
gdjs.InGameCode.GDBackgroundObjects2.length = 0;
gdjs.InGameCode.GDBackgroundObjects3.length = 0;
gdjs.InGameCode.GDBackgroundObjects4.length = 0;
gdjs.InGameCode.GDfruit1Objects1.length = 0;
gdjs.InGameCode.GDfruit1Objects2.length = 0;
gdjs.InGameCode.GDfruit1Objects3.length = 0;
gdjs.InGameCode.GDfruit1Objects4.length = 0;
gdjs.InGameCode.GDfruit2Objects1.length = 0;
gdjs.InGameCode.GDfruit2Objects2.length = 0;
gdjs.InGameCode.GDfruit2Objects3.length = 0;
gdjs.InGameCode.GDfruit2Objects4.length = 0;
gdjs.InGameCode.GDfruit0Objects1.length = 0;
gdjs.InGameCode.GDfruit0Objects2.length = 0;
gdjs.InGameCode.GDfruit0Objects3.length = 0;
gdjs.InGameCode.GDfruit0Objects4.length = 0;
gdjs.InGameCode.GDFinalPointObjects1.length = 0;
gdjs.InGameCode.GDFinalPointObjects2.length = 0;
gdjs.InGameCode.GDFinalPointObjects3.length = 0;
gdjs.InGameCode.GDFinalPointObjects4.length = 0;
gdjs.InGameCode.GDInitialPointObjects1.length = 0;
gdjs.InGameCode.GDInitialPointObjects2.length = 0;
gdjs.InGameCode.GDInitialPointObjects3.length = 0;
gdjs.InGameCode.GDInitialPointObjects4.length = 0;
gdjs.InGameCode.GDDebuggerObjects1.length = 0;
gdjs.InGameCode.GDDebuggerObjects2.length = 0;
gdjs.InGameCode.GDDebuggerObjects3.length = 0;
gdjs.InGameCode.GDDebuggerObjects4.length = 0;
gdjs.InGameCode.GDPlayerObjects1.length = 0;
gdjs.InGameCode.GDPlayerObjects2.length = 0;
gdjs.InGameCode.GDPlayerObjects3.length = 0;
gdjs.InGameCode.GDPlayerObjects4.length = 0;
gdjs.InGameCode.GDCard3Objects1.length = 0;
gdjs.InGameCode.GDCard3Objects2.length = 0;
gdjs.InGameCode.GDCard3Objects3.length = 0;
gdjs.InGameCode.GDCard3Objects4.length = 0;
gdjs.InGameCode.GDCard2Objects1.length = 0;
gdjs.InGameCode.GDCard2Objects2.length = 0;
gdjs.InGameCode.GDCard2Objects3.length = 0;
gdjs.InGameCode.GDCard2Objects4.length = 0;
gdjs.InGameCode.GDCard1Objects1.length = 0;
gdjs.InGameCode.GDCard1Objects2.length = 0;
gdjs.InGameCode.GDCard1Objects3.length = 0;
gdjs.InGameCode.GDCard1Objects4.length = 0;
gdjs.InGameCode.GDGroundObjects1.length = 0;
gdjs.InGameCode.GDGroundObjects2.length = 0;
gdjs.InGameCode.GDGroundObjects3.length = 0;
gdjs.InGameCode.GDGroundObjects4.length = 0;

gdjs.InGameCode.eventsList0xb4be0(runtimeScene);
return;

}
gdjs['InGameCode'] = gdjs.InGameCode;
