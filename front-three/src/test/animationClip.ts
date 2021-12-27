import {AnimationClip,AnimationAction} from 'three'

//动画录制
export function createAnimationClip(){
    let name='test'
    let duration=1000
    // let name='test'
    let clip=new AnimationClip(name,duration)
    return clip
} 

//调用clip动画