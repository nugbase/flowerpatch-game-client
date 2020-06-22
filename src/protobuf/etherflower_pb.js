/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var protobuf_flower_pb = require('../protobuf/flower_pb.js');
goog.exportSymbol('proto.protobuf.EtherFlower', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protobuf.EtherFlower = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protobuf.EtherFlower, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protobuf.EtherFlower.displayName = 'proto.protobuf.EtherFlower';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protobuf.EtherFlower.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf.EtherFlower.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf.EtherFlower} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf.EtherFlower.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    owner: jspb.Message.getFieldWithDefault(msg, 2, ""),
    rarity: jspb.Message.getFieldWithDefault(msg, 3, 0),
    raritytier: jspb.Message.getFieldWithDefault(msg, 4, 0),
    flowerdata: (f = msg.getFlowerdata()) && protobuf_flower_pb.Flower.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protobuf.EtherFlower}
 */
proto.protobuf.EtherFlower.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf.EtherFlower;
  return proto.protobuf.EtherFlower.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf.EtherFlower} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf.EtherFlower}
 */
proto.protobuf.EtherFlower.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRarity(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRaritytier(value);
      break;
    case 5:
      var value = new protobuf_flower_pb.Flower;
      reader.readMessage(value,protobuf_flower_pb.Flower.deserializeBinaryFromReader);
      msg.setFlowerdata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protobuf.EtherFlower.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf.EtherFlower.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf.EtherFlower} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf.EtherFlower.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getOwner();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRarity();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getRaritytier();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getFlowerdata();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      protobuf_flower_pb.Flower.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 ID = 1;
 * @return {number}
 */
proto.protobuf.EtherFlower.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.protobuf.EtherFlower.prototype.setId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string owner = 2;
 * @return {string}
 */
proto.protobuf.EtherFlower.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.protobuf.EtherFlower.prototype.setOwner = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 rarity = 3;
 * @return {number}
 */
proto.protobuf.EtherFlower.prototype.getRarity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.protobuf.EtherFlower.prototype.setRarity = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 rarityTier = 4;
 * @return {number}
 */
proto.protobuf.EtherFlower.prototype.getRaritytier = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.protobuf.EtherFlower.prototype.setRaritytier = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional Flower flowerData = 5;
 * @return {?proto.protobuf.Flower}
 */
proto.protobuf.EtherFlower.prototype.getFlowerdata = function() {
  return /** @type{?proto.protobuf.Flower} */ (
    jspb.Message.getWrapperField(this, protobuf_flower_pb.Flower, 5));
};


/** @param {?proto.protobuf.Flower|undefined} value */
proto.protobuf.EtherFlower.prototype.setFlowerdata = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.protobuf.EtherFlower.prototype.clearFlowerdata = function() {
  this.setFlowerdata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.protobuf.EtherFlower.prototype.hasFlowerdata = function() {
  return jspb.Message.getField(this, 5) != null;
};


goog.object.extend(exports, proto.protobuf);