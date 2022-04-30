var documenterSearchIndex = {"docs":
[{"location":"#GeoJSON.jl-1","page":"GeoJSON.jl","title":"GeoJSON.jl","text":"","category":"section"},{"location":"#Introduction-1","page":"GeoJSON.jl","title":"Introduction","text":"","category":"section"},{"location":"#","page":"GeoJSON.jl","title":"GeoJSON.jl","text":"(Image: Build Status) (Image: Build Status) (Image: Coverage Status) (Image: Latest Documentation)","category":"page"},{"location":"#","page":"GeoJSON.jl","title":"GeoJSON.jl","text":"This library is developed independently of, but is heavily influenced in design by the python-geojson package. It contains:","category":"page"},{"location":"#","page":"GeoJSON.jl","title":"GeoJSON.jl","text":"Functions for encoding and decoding GeoJSON formatted data\na type hierarchy (according to the GeoJSON specification)\nAn implementation of the __geo_interface__, a GeoJSON-like protocol for geo-spatial (GIS) vector data.","category":"page"},{"location":"#Contents-1","page":"GeoJSON.jl","title":"Contents","text":"","category":"section"},{"location":"#","page":"GeoJSON.jl","title":"GeoJSON.jl","text":"","category":"page"},{"location":"#Installation-1","page":"GeoJSON.jl","title":"Installation","text":"","category":"section"},{"location":"#","page":"GeoJSON.jl","title":"GeoJSON.jl","text":"The package is registered and can be added using the package manager:","category":"page"},{"location":"#","page":"GeoJSON.jl","title":"GeoJSON.jl","text":"pkg> add GeoJSON","category":"page"},{"location":"#","page":"GeoJSON.jl","title":"GeoJSON.jl","text":"To test if it is installed correctly run:","category":"page"},{"location":"#","page":"GeoJSON.jl","title":"GeoJSON.jl","text":"pkg> test GeoJSON","category":"page"},{"location":"#Basic-Usage-1","page":"GeoJSON.jl","title":"Basic Usage","text":"","category":"section"},{"location":"#","page":"GeoJSON.jl","title":"GeoJSON.jl","text":"Although we use GeoInterface types for representing GeoJSON objects, it works in tandem  with the JSON3.jl package, for parsing and some printing of objects. Here are some examples of its functionality:","category":"page"},{"location":"#Reads-a-GeoJSON-String-or-IO-stream-into-a-GeoInterface-object-1","page":"GeoJSON.jl","title":"Reads a GeoJSON String or IO stream into a GeoInterface object","text":"","category":"section"},{"location":"#","page":"GeoJSON.jl","title":"GeoJSON.jl","text":"using GeoJSON\nosm_buildings = \"\"\"\n{\n    \"type\": \"FeatureCollection\",\n    \"features\": [{\n        \"type\": \"Feature\",\n        \"geometry\": {\n            \"type\": \"Polygon\",\n            \"coordinates\": [\n                [\n                    [13.42634, 52.49533],\n                    [13.42630, 52.49529],\n                    [13.42640, 52.49525],\n                    [13.42611, 52.49494],\n                    [13.42590, 52.49501],\n                    [13.42583, 52.49495],\n                    [13.42619, 52.49483],\n                    [13.42660, 52.49524],\n                    [13.42634, 52.49533]\n                ]\n            ]\n        },\n        \"properties\": {\n            \"color\": \"rgb(255,200,150)\",\n            \"height\": 150\n        }\n    }]\n}\"\"\"\nbuildings = GeoJSON.read(osm_buildings)\nbuildings","category":"page"},{"location":"#","page":"GeoJSON.jl","title":"GeoJSON.jl","text":"Use GeoJSON.read(read(\"tech_square.geojson\")) to read GeoJSON files from disk.","category":"page"},{"location":"#Create-a-GeoInterface-object-and-write-to-disk-as-a-GeoJSON-1","page":"GeoJSON.jl","title":"Create a GeoInterface object and write to disk as a GeoJSON","text":"","category":"section"},{"location":"#","page":"GeoJSON.jl","title":"GeoJSON.jl","text":"using GeoJSON\nusing Pkg; Pkg.add(\"GeoInterface\"); using GeoInterface\n\n# create a polygon\nobj = GeoInterface.Polygon([[[13.42634, 52.49533], [13.4263, 52.49529], [13.4264, 52.49525], [13.42611, 52.49494], [13.4259, 52.49501], [13.42583, 52.49495], [13.42619, 52.49483], [13.4266, 52.49524], [13.42634, 52.49533]]])\n\n# write to disk as a geojson \nwrite(\"filename.json\", GeoJSON.write(obj))","category":"page"},{"location":"#Transforms-a-GeoInterface-object-into-a-nested-Array-or-Dict-1","page":"GeoJSON.jl","title":"Transforms a GeoInterface object into a nested Array or Dict","text":"","category":"section"},{"location":"#","page":"GeoJSON.jl","title":"GeoJSON.jl","text":"dict = geo2dict(buildings) # geo2dict -- GeoInterface object to Dict/Array-representation\ndict","category":"page"},{"location":"#","page":"GeoJSON.jl","title":"GeoJSON.jl","text":"using JSON3\nJSON3.read(osm_buildings) # should be comparable (if not the same)","category":"page"},{"location":"#Transforms-from-a-nested-Array/Dict-to-a-GeoInterface-object-1","page":"GeoJSON.jl","title":"Transforms from a nested Array/Dict to a GeoInterface object","text":"","category":"section"},{"location":"#","page":"GeoJSON.jl","title":"GeoJSON.jl","text":"dict2geo(dict)","category":"page"},{"location":"#","page":"GeoJSON.jl","title":"GeoJSON.jl","text":"GeoJSON.read(osm_buildings) # the original object (for comparison)","category":"page"},{"location":"#GeoInterface-1","page":"GeoJSON.jl","title":"GeoInterface","text":"","category":"section"},{"location":"#","page":"GeoJSON.jl","title":"GeoJSON.jl","text":"This library implements the GeoInterface. For more information on the types that are returned by this package, and the methods that can be used on them, refer to the documentation of the GeoInterface package.","category":"page"},{"location":"#Functions-1","page":"GeoJSON.jl","title":"Functions","text":"","category":"section"},{"location":"#Input-1","page":"GeoJSON.jl","title":"Input","text":"","category":"section"},{"location":"#","page":"GeoJSON.jl","title":"GeoJSON.jl","text":"To read in GeoJSON data, use GeoJSON.read.","category":"page"},{"location":"#","page":"GeoJSON.jl","title":"GeoJSON.jl","text":"GeoJSON.read","category":"page"},{"location":"#GeoJSON.read","page":"GeoJSON.jl","title":"GeoJSON.read","text":"read(input::Union{AbstractString, IO, AbstractVector{UInt8}})\n\nRead a GeoJSON string or IO stream into a GeoInterface object.\n\nTo read a file, use GeoJSON.read(read(path)).\n\nnote: Note\nGeoJSON.jl loads features into the GeoInterface.jl format and that this differs from GeoJSON in the following ways:Julia Geometries do not provide a bbox and crs method. If you wish to provide a bbox or crs attribute, wrap the geometry into a Feature or FeatureCollection.\nFeatures do not have special fields for id, bbox, and crs. These are to be provided (or found) in the properties field, under the keys featureid, bbox, and crs respectively (if they exist).When saving GeoJSON, these transformations will be reversed: if properties has a key featureid, that will be removed from properties and a matching member id will be added to the Feature; similarly for crs and bbox.\n\nExamples\n\njulia> GeoJSON.read(\"{\"type\": \"Point\", \"coordinates\": [30, 10]}\")\nGeoInterface.Point([30.0, 10.0])\n\n\n\n\n\n","category":"function"},{"location":"#Output-1","page":"GeoJSON.jl","title":"Output","text":"","category":"section"},{"location":"#","page":"GeoJSON.jl","title":"GeoJSON.jl","text":"GeoJSON.write","category":"page"},{"location":"#GeoJSON.write","page":"GeoJSON.jl","title":"GeoJSON.write","text":"write(obj)\n\nCreate a GeoJSON string from an object that implements the GeoInterface, either AbstractGeometry, AbstractFeature or AbstractFeatureCollection.\n\nnote: Note\nGeoJSON.jl loads features into the GeoInterface.jl format and that this differs from GeoJSON in the following ways:Julia Geometries do not provide a bbox and crs method. If you wish to provide a bbox or crs attribute, wrap the geometry into a Feature or FeatureCollection.\nFeatures do not have special fields for id, bbox, and crs. These are to be provided (or found) in the properties field, under the keys featureid, bbox, and crs respectively (if they exist).When saving GeoJSON, these transformations will be reversed: if properties has a key featureid, that will be removed from properties and a matching member id will be added to the Feature; similarly for crs and bbox.\n\nExamples\n\njulia> GeoJSON.write(Point([30.0, 10.0]))\n\"{\"coordinates\":[30.0,10.0],\"type\":\"Point\"}\"\n\n\n\n\n\n","category":"function"},{"location":"#Conversion-1","page":"GeoJSON.jl","title":"Conversion","text":"","category":"section"},{"location":"#","page":"GeoJSON.jl","title":"GeoJSON.jl","text":"For more fine grained control, to construct or deconstruct parts of a GeoJSON, use geo2dict or dict2geo.","category":"page"},{"location":"#","page":"GeoJSON.jl","title":"GeoJSON.jl","text":"geo2dict\ndict2geo","category":"page"},{"location":"#GeoJSON.geo2dict","page":"GeoJSON.jl","title":"GeoJSON.geo2dict","text":"geo2dict(obj)\n\nTransform a GeoInterface object to a JSON dictionary.\n\nSee also: dict2geo\n\nExamples\n\njulia> geo2dict(Point([30.0, 10.0]))\nDict{String,Any} with 2 entries:\n  \"coordinates\" => [30.0, 10.0]\n  \"type\"        => \"Point\"\n\n\n\n\n\n","category":"function"},{"location":"#GeoJSON.dict2geo","page":"GeoJSON.jl","title":"GeoJSON.dict2geo","text":"dict2geo(obj::AbstractDict{<:Union{Symbol, String}, Any})\n\nTransform a JSON dictionary to a GeoInterface object.\n\nSee also: geo2dict\n\nExamples\n\njulia> dict2geo(Dict(\"type\" => \"Point\", \"coordinates\" => [30.0, 10.0]))\nPoint([30.0, 10.0])\n\n\n\n\n\n","category":"function"},{"location":"#Index-1","page":"GeoJSON.jl","title":"Index","text":"","category":"section"},{"location":"#","page":"GeoJSON.jl","title":"GeoJSON.jl","text":"","category":"page"}]
}
