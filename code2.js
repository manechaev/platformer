gdjs._1055_1086_1073_1077_1076_1072Code = {};
gdjs._1055_1086_1073_1077_1076_1072Code.localVariables = [];
gdjs._1055_1086_1073_1077_1076_1072Code.idToCallbackMap = new Map();
gdjs._1055_1086_1073_1077_1076_1072Code.GDNewTiledSpriteObjects1= [];
gdjs._1055_1086_1073_1077_1076_1072Code.GDNewTiledSpriteObjects2= [];
gdjs._1055_1086_1073_1077_1076_1072Code.GDNewSpriteObjects1= [];
gdjs._1055_1086_1073_1077_1076_1072Code.GDNewSpriteObjects2= [];
gdjs._1055_1086_1073_1077_1076_1072Code.GDNewTextObjects1= [];
gdjs._1055_1086_1073_1077_1076_1072Code.GDNewTextObjects2= [];


gdjs._1055_1086_1073_1077_1076_1072Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._1055_1086_1073_1077_1076_1072Code.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1055_1086_1073_1077_1076_1072Code.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs._1055_1086_1073_1077_1076_1072Code.GDNewSpriteObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs._1055_1086_1073_1077_1076_1072Code.GDNewSpriteObjects1[k] = gdjs._1055_1086_1073_1077_1076_1072Code.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs._1055_1086_1073_1077_1076_1072Code.GDNewSpriteObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Безымянная сцена", false);
}
}

}


};

gdjs._1055_1086_1073_1077_1076_1072Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._1055_1086_1073_1077_1076_1072Code.GDNewTiledSpriteObjects1.length = 0;
gdjs._1055_1086_1073_1077_1076_1072Code.GDNewTiledSpriteObjects2.length = 0;
gdjs._1055_1086_1073_1077_1076_1072Code.GDNewSpriteObjects1.length = 0;
gdjs._1055_1086_1073_1077_1076_1072Code.GDNewSpriteObjects2.length = 0;
gdjs._1055_1086_1073_1077_1076_1072Code.GDNewTextObjects1.length = 0;
gdjs._1055_1086_1073_1077_1076_1072Code.GDNewTextObjects2.length = 0;

gdjs._1055_1086_1073_1077_1076_1072Code.eventsList0(runtimeScene);
gdjs._1055_1086_1073_1077_1076_1072Code.GDNewTiledSpriteObjects1.length = 0;
gdjs._1055_1086_1073_1077_1076_1072Code.GDNewTiledSpriteObjects2.length = 0;
gdjs._1055_1086_1073_1077_1076_1072Code.GDNewSpriteObjects1.length = 0;
gdjs._1055_1086_1073_1077_1076_1072Code.GDNewSpriteObjects2.length = 0;
gdjs._1055_1086_1073_1077_1076_1072Code.GDNewTextObjects1.length = 0;
gdjs._1055_1086_1073_1077_1076_1072Code.GDNewTextObjects2.length = 0;


return;

}

gdjs['_1055_1086_1073_1077_1076_1072Code'] = gdjs._1055_1086_1073_1077_1076_1072Code;
