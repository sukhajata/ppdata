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
 *   !proto.ppdata.DataMsgRequest,
 *   !proto.ppdata.InstMsgData>}
 */
const methodDescriptor_DeviceDataService_GetInstMsgData = new grpc.web.MethodDescriptor(
  '/ppdata.DeviceDataService/GetInstMsgData',
  grpc.web.MethodType.UNARY,
  proto.ppdata.DataMsgRequest,
  proto.ppdata.InstMsgData,
  /**
   * @param {!proto.ppdata.DataMsgRequest} request
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
 *   !proto.ppdata.DataMsgRequest,
 *   !proto.ppdata.InstMsgData>}
 */
const methodInfo_DeviceDataService_GetInstMsgData = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ppdata.InstMsgData,
  /**
   * @param {!proto.ppdata.DataMsgRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppdata.InstMsgData.deserializeBinary
);


/**
 * @param {!proto.ppdata.DataMsgRequest} request The
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
 * @param {!proto.ppdata.DataMsgRequest} request The
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


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ppdata.DataMsgRequest,
 *   !proto.ppdata.ProcMsgData>}
 */
const methodDescriptor_DeviceDataService_GetProcMsgData = new grpc.web.MethodDescriptor(
  '/ppdata.DeviceDataService/GetProcMsgData',
  grpc.web.MethodType.UNARY,
  proto.ppdata.DataMsgRequest,
  proto.ppdata.ProcMsgData,
  /**
   * @param {!proto.ppdata.DataMsgRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppdata.ProcMsgData.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ppdata.DataMsgRequest,
 *   !proto.ppdata.ProcMsgData>}
 */
const methodInfo_DeviceDataService_GetProcMsgData = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ppdata.ProcMsgData,
  /**
   * @param {!proto.ppdata.DataMsgRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppdata.ProcMsgData.deserializeBinary
);


/**
 * @param {!proto.ppdata.DataMsgRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ppdata.ProcMsgData)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ppdata.ProcMsgData>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ppdata.DeviceDataServiceClient.prototype.getProcMsgData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ppdata.DeviceDataService/GetProcMsgData',
      request,
      metadata || {},
      methodDescriptor_DeviceDataService_GetProcMsgData,
      callback);
};


/**
 * @param {!proto.ppdata.DataMsgRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ppdata.ProcMsgData>}
 *     A native promise that resolves to the response
 */
proto.ppdata.DeviceDataServicePromiseClient.prototype.getProcMsgData =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ppdata.DeviceDataService/GetProcMsgData',
      request,
      metadata || {},
      methodDescriptor_DeviceDataService_GetProcMsgData);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ppdata.DataMsgRequest,
 *   !proto.ppdata.PQMsgData>}
 */
const methodDescriptor_DeviceDataService_GetPQMsgData = new grpc.web.MethodDescriptor(
  '/ppdata.DeviceDataService/GetPQMsgData',
  grpc.web.MethodType.UNARY,
  proto.ppdata.DataMsgRequest,
  proto.ppdata.PQMsgData,
  /**
   * @param {!proto.ppdata.DataMsgRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppdata.PQMsgData.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ppdata.DataMsgRequest,
 *   !proto.ppdata.PQMsgData>}
 */
const methodInfo_DeviceDataService_GetPQMsgData = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ppdata.PQMsgData,
  /**
   * @param {!proto.ppdata.DataMsgRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppdata.PQMsgData.deserializeBinary
);


/**
 * @param {!proto.ppdata.DataMsgRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ppdata.PQMsgData)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ppdata.PQMsgData>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ppdata.DeviceDataServiceClient.prototype.getPQMsgData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ppdata.DeviceDataService/GetPQMsgData',
      request,
      metadata || {},
      methodDescriptor_DeviceDataService_GetPQMsgData,
      callback);
};


/**
 * @param {!proto.ppdata.DataMsgRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ppdata.PQMsgData>}
 *     A native promise that resolves to the response
 */
proto.ppdata.DeviceDataServicePromiseClient.prototype.getPQMsgData =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ppdata.DeviceDataService/GetPQMsgData',
      request,
      metadata || {},
      methodDescriptor_DeviceDataService_GetPQMsgData);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ppdata.DataMsgRequest,
 *   !proto.ppdata.GeoscanMsgData>}
 */
const methodDescriptor_DeviceDataService_GetGeoscanMsgData = new grpc.web.MethodDescriptor(
  '/ppdata.DeviceDataService/GetGeoscanMsgData',
  grpc.web.MethodType.UNARY,
  proto.ppdata.DataMsgRequest,
  proto.ppdata.GeoscanMsgData,
  /**
   * @param {!proto.ppdata.DataMsgRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppdata.GeoscanMsgData.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ppdata.DataMsgRequest,
 *   !proto.ppdata.GeoscanMsgData>}
 */
const methodInfo_DeviceDataService_GetGeoscanMsgData = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ppdata.GeoscanMsgData,
  /**
   * @param {!proto.ppdata.DataMsgRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppdata.GeoscanMsgData.deserializeBinary
);


/**
 * @param {!proto.ppdata.DataMsgRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ppdata.GeoscanMsgData)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ppdata.GeoscanMsgData>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ppdata.DeviceDataServiceClient.prototype.getGeoscanMsgData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ppdata.DeviceDataService/GetGeoscanMsgData',
      request,
      metadata || {},
      methodDescriptor_DeviceDataService_GetGeoscanMsgData,
      callback);
};


/**
 * @param {!proto.ppdata.DataMsgRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ppdata.GeoscanMsgData>}
 *     A native promise that resolves to the response
 */
proto.ppdata.DeviceDataServicePromiseClient.prototype.getGeoscanMsgData =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ppdata.DeviceDataService/GetGeoscanMsgData',
      request,
      metadata || {},
      methodDescriptor_DeviceDataService_GetGeoscanMsgData);
};


module.exports = proto.ppdata;

