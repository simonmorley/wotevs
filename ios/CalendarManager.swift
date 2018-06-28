//
//  CalendarManager.swift
//

import Foundation

@objc(CalendarManager)
class CalendarManager: NSObject {
  
  let array: [Any] = [[100, 200, 300]]

  @objc(addEvent:location:date:callback:)
  func addEvent(name: String, location: String, date: NSNumber, callback: (Any) -> ()) -> Void {
    // Date is ready to use!
    NSLog("%@ %@ %@", name, location, date)
    callback(array)
  }
  
  
  @objc
  func constantsToExport() -> [String: Any]! {
    return ["someKey": "someValue"]
  }
  
}
