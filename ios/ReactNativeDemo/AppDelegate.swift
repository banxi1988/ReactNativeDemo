//
//  AppDelegate.swift
//  ReactNativeDemo
//
//  Created by Haizhen Lee on 16/3/12.
//  Copyright © 2016年 Facebook. All rights reserved.
//

import UIKit


@UIApplicationMain
class AppDelegate:UIResponder, UIApplicationDelegate {
  
  var window: UIWindow?
  
  func application(application: UIApplication, didFinishLaunchingWithOptions launchOptions: [NSObject : AnyObject]?) -> Bool {
    window = UIWindow(frame: UIScreen.mainScreen().bounds)
    let rootVC = DemoListViewController()
    let jsCodeLocation = NSURL(string: "http://localhost:8081/index.ios.bundle?platformios&dev=true")
    let rootView = RCTRootView(bundleURL: jsCodeLocation, moduleName: "ReactNativeDemoListRoot", initialProperties: nil, launchOptions: launchOptions)
    rootVC.view = rootView
    rootVC.title = "ReactNative Demo 列表"
    rootVC.navigationItem.title = rootVC.title
    
    let button = UIBarButtonItem(title: "设置", style: .Plain, target: self, action: "enterSettings:")
    rootVC.navigationItem.rightBarButtonItem = button
    let nvc = UINavigationController(rootViewController: rootVC)
    window?.rootViewController = nvc
    window?.makeKeyAndVisible()
    
    return true
  }
  
  
  func enterSettings(sender:AnyObject){
    let vc = UIViewController()
    vc.automaticallyAdjustsScrollViewInsets = true
    let jsCodeLocation = NSURL(string: "http://localhost:8081/settings.ios.bundle?platformios&dev=true")
    let rootView = RCTRootView(bundleURL: jsCodeLocation, moduleName: "Settings", initialProperties: nil, launchOptions: nil)
    vc.view = rootView
    window?.rootViewController?.showViewController(vc, sender: self)
    
  }
}

