//
//  DemoListViewController.swift
//  ReactNativeDemo
//
//  Created by Haizhen Lee on 16/3/12.
//  Copyright © 2016年 Facebook. All rights reserved.
//

import Foundation

// Build for target uicontroller
import UIKit

//-DemoListViewController:vc

class DemoListViewController : UIViewController {
  
  convenience init(){
    self.init(nibName: nil, bundle: nil)
  }
  // must needed for iOS 8
  override init(nibName nibNameOrNil: String?, bundle nibBundleOrNil: NSBundle?) {
    super.init(nibName: nibNameOrNil, bundle: nibBundleOrNil)
  }
  required init?(coder aDecoder: NSCoder) {
    super.init(coder: aDecoder)
  }
  
  var allOutlets :[UIView]{
    return []
  }
  
  func commonInit(){
    for childView in allOutlets{
      self.view.addSubview(childView)
      childView.translatesAutoresizingMaskIntoConstraints = false
    }
    installConstaints()
    setupAttrs()
  }
  
  func installConstaints(){
  }
  
  func setupAttrs(){
  }
  override func loadView(){
    super.loadView()
    
    commonInit()
  }
  
  
  
  
  override func viewDidLoad() {
    super.viewDidLoad()

    automaticallyAdjustsScrollViewInsets = true
    

  }
  

  
  
  
  
  
  
  
  
}



