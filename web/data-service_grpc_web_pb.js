/**
 * @fileoverview gRPC-Web generated client stub for ppdata
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.ppdata = require('./data-service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ppdata.DeviceDataServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ppdata.DeviceDataServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ppdata.InstMsgRequest,
 *   !proto.ppdata.InstMsgData>}
 */
const methodDescriptor_DeviceDataService_GetInstMsgData = new grpc.web.MethodDescriptor(
  '/ppdata.DeviceDataService/GetInstMsgData',
  grpc.web.MethodType.UNARY,
  proto.ppdata.InstMsgRequest,
  proto.ppdata.InstMsgData,
  /**
   * @param {!proto.ppdata.InstMsgRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppdata.InstMsgData.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ppdata.InstMsgRequest,
 *   !proto.ppdata.InstMsgData>}
 */
const methodInfo_DeviceDataService_GetInstMsgData = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ppdata.InstMsgData,
  /**
   * @param {!proto.ppdata.InstMsgRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppdata.InstMsgData.deserializeBinary
);


/**
 * @param {!proto.ppdata.InstMsgRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ppdata.InstMsgData)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ppdata.InstMsgData>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ppdata.DeviceDataServiceClient.prototype.getInstMsgData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ppdata.DeviceDataService/GetInstMsgData',
      request,
      metadata || {},
      methodDescriptor_DeviceDataService_GetInstMsgData,
      callback);
};


/**
 * @param {!proto.ppdata.InstMsgRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ppdata.InstMsgData>}
 *     A native promise that resolves to the response
 */
proto.ppdata.DeviceDataServicePromiseClient.prototype.getInstMsgData =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ppdata.DeviceDataService/GetInstMsgData',
      request,
      metadata || {},
      methodDescriptor_DeviceDataService_GetInstMsgData);
};


module.exports = proto.ppdata;

