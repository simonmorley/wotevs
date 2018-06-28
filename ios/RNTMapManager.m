// RNTMapManager.m

#import <MapKit/MapKit.h>

#import <React/RCTViewManager.h>

#import "RCTConvert+Mapkit.m"

@interface RNTMapManager : RCTViewManager
@end

@implementation RNTMapManager

RCT_EXPORT_MODULE()

- (UIView *)view
{
  return [[MKMapView alloc] init];
}

RCT_CUSTOM_VIEW_PROPERTY(region, MKCoordinateRegion, MKMapView)
{
  [view setRegion:json ? [RCTConvert MKCoordinateRegion:json] : defaultView.region animated:YES];
}

RCT_EXPORT_VIEW_PROPERTY(zoomEnabled, BOOL)

@end
