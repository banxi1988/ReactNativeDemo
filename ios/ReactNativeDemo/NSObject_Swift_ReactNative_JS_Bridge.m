//
//  NSObject_Swift_ReactNative_JS_Bridge.h
//  ReactNativeDemo
//
//  Created by Haizhen Lee on 16/3/15.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>

#import "RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(ReactComponentPresenter,NSObject)

  RCT_EXTERN_METHOD(pushComponent:(NSString *)compId title:(NSString*)title)

- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}
@end

