//
//  ReactComponentPresenter.swift
//  ReactNativeDemo
//
//  Created by Haizhen Lee on 16/3/15.
//  Copyright © 2016年 Facebook. All rights reserved.
//

import UIKit


@objc(ReactComponentPresenter)
class ReactComponentPresenter: NSObject {

  @objc
  func pushComponent(compId:String,title:String){
    NSLog("\(__FUNCTION__) \(compId) \(title)")
    let vc = UIViewController()
    var chars = compId.characters.map{ String($0) }
    chars[0] = chars[0].uppercaseString
    let moduleName = chars.joinWithSeparator("")
    let jsCodeLocation = NSURL(string: "http://localhost:8081/\(compId).ios.bundle?platformios&dev=true")
    let rootView = RCTRootView(bundleURL: jsCodeLocation, moduleName:moduleName, initialProperties: nil, launchOptions: nil)
    vc.view = rootView
    vc.title = title
    vc.navigationItem.title = title
    rootViewController()?.showViewController(vc, sender: self)
  }
}
