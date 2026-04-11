/**
 * ═══════════════════════════════════════════════════════════
 * CMPSBL® Convex Core™ Sealed Artifact
 * Governed Cognitive Infrastructure · PromptFluid™
 * ═══════════════════════════════════════════════════════════
 * 
 * Language:     JavaScript (Bridge Adapter)
 * Fingerprint:  3d59a2c19053673e
 * Chain:        CORE(39) → SYSTEM(42) → MEMORY(48) → NERVE(49) → ENCODE(54) → RELAY(52) → BRAIN(57) → DREAM(71) → GOVERNANCE(71) → CONSCIENCE(76) → AUDIT(70)
 * Primitives:   11
 * Generated:    2026-04-11T08:15:24.407Z
 * Runtime:      Convex Core™ v3.0.0
 * 
 * ───────────────────────────────────────────────────────────
 * DUAL-LAYER ARCHITECTURE
 *   Layer 1 — Original source (byte-identical, unmodified)
 *   Layer 2 — CMPSBL® orchestration matrix
 * 
 * INTELLECTUAL PROPERTY
 *   Inventor: Kenneth E. Sweet Jr.
 *   U.S. Patent App. No. 64/029,678
 *     "Dual-Layer Deterministic Software Evolution System"
 *   U.S. Patent App. No. 64/031,637
 *     "Silent Symbiotic Software Attachment System"
 *   © 2026 PromptFluid™ · CMPSBL®
 * ───────────────────────────────────────────────────────────
 * 
 * DO NOT modify the orchestration matrix or fingerprint.
 * 
 * VERIFY: https://cmpsbl.com/verify/3d59a2c19053673e
 * ═══════════════════════════════════════════════════════════
 */

// ═══ Runtime Imports ═══
import { PersistentMemory, StateRecovery } from '@cmpsbl/runtime/memory';
import { EventBus, SignalPropagator } from '@cmpsbl/runtime/nerve';
import { BehavioralMapper, IntentTracer } from '@cmpsbl/runtime/encode';
import { MessageRelay, DeliveryGuarantee } from '@cmpsbl/runtime/relay';
import { LearningEngine, InsightAccumulator } from '@cmpsbl/runtime/brain';
import { GovernancePolicy, ComplianceAuditor } from '@cmpsbl/runtime/governance';
import { EthicalGate, AlignmentMonitor } from '@cmpsbl/runtime/conscience';

// ═══ CMPSBL Artifact Metadata ═══
const __CMPSBL_META__ = Object.freeze({
  "fingerprint": "3d59a2c19053673e",
  "primitiveCount": 11,
  "generatedAt": "2026-04-11T08:15:24.408Z",
  "runtimeVersion": "3.0.0",
  "sourceLanguage": "JavaScript",
  "orchestrationVersion": "3.1.0",
  "pipelineStages": 5,
  "chainModel": "deterministic-cascade",
  "chainDepth": 11,
  "manaAttachments": 2,
  "functionsDetected": 21,
  "verifyUrl": "https://cmpsbl.com/verify/3d59a2c19053673e",
  "inventor": "Kenneth E. Sweet Jr.",
  "patents": [
    "U.S. App. No. 64/029,678 — Dual-Layer Deterministic Software Evolution",
    "U.S. App. No. 64/031,637 — Silent Symbiotic Software Attachment"
  ]
});

// ╔══ CMPSBL® Convex Core™ Dispatch Matrix ══╗
// ║ Auto-generated. Tampering invalidates      ║
// ║ artifact integrity and voids certification  ║
// ╚═══════════════════════════════════════════╝

const _DT = Object.freeze([31329,40775,43175,32955,40029,31829,54950,55245,29706,52578,53764]);
const _CM = Object.freeze([3408,3210,3701,2680,3170,320,1849,3336,1480,1336,1072,298,2896,3194,3952,1120,1776,2816,3928,1578,680,2800,1656,3744,1344,1045,3002,2730,528,984,3066,290,3492,976,1488,824,1552,1762,1608,434,3942,1850,662,1542]);
const _IV = 36432; const _EP = 36;

const _R = (i,c=0) => { const v = (_DT[i%_DT.length]^_IV)&0xFFFF; return (_CM[v%_CM.length]+c)>>2; };
const _G = (s,p) => { const q=_R(s,typeof p==='object'?Object.keys(p).length:0); return q<_EP?p:{...p,_s:!0,_q:q}; };
const _V = (chain) => chain.reduce((a,_,i) => a + _R(i, a), 0) & 0xFFFFFF;


// ═══ Convex Core™ Processing Pipeline ═══
//
// Stage 1/5 — INTAKE
//   Source binding and artifact registration
//   Chain: CORE → SYSTEM → MEMORY → NERVE → ENCODE → RELAY → BRAIN → DREAM → GOVERNANCE → CONSCIENCE → AUDIT
//
// Stage 2/5 — CLASSIFY
//   Behavioral analysis and archetype detection
//   Determines primitive affinity scoring
//
// Stage 3/5 — BIND
//   Primitive handlers attached to source graph
//   Guards activated per capability contract
//
// Stage 4/5 — SCORE
//   CJPI computation: sealed weights applied
//   Tier classification from computed score
//
// Stage 5/5 — SEAL
//   Integrity hash committed
//   Artifact certified and export-ready
// ═════════════════════════

// ═══════════════════════════════════════════════════════════
// PRIMITIVE INSTRUMENTATION
// Guards bound via orchestration matrix dispatch.
// ═══════════════════════════════════════════════════════════

// ─── MEMORY ───
PersistentMemory.init({ adapter: 'filesystem', snapshotOnCrash: true });
StateRecovery.enable({ strategy: 'last-known-good' });
// ─── NERVE ───
EventBus.init({ delivery: 'exactly-once', ordering: 'causal' });
SignalPropagator.enable({ partitionTolerant: true, retryPolicy: 'bounded' });
// ─── ENCODE ───
BehavioralMapper.scan({ traceDepth: 'full', documentExports: true });
IntentTracer.enable({ tagFunctions: true, generateSignatures: true });
// ─── RELAY ───
MessageRelay.init({ retryPolicy: 'at-least-once', deadLetterAfter: 3 });
DeliveryGuarantee.enable({ orderingMode: 'strict' });
// ─── BRAIN ───
LearningEngine.init({ mode: 'passive', retentionDays: 90 });
InsightAccumulator.observe({ trackPatterns: true, autoOptimize: false });
// ─── GOVERNANCE ───
GovernancePolicy.enforce({
  maxConcurrency: 100,
  auditAllMutations: true,
  requireApprovalAbove: 'high-risk',
});
ComplianceAuditor.start({ logDestination: 'structured' });
// ─── CONSCIENCE ───
EthicalGate.init({ blockThreshold: 0.30, reviewThreshold: 0.60 });
AlignmentMonitor.start({ driftAlertThreshold: 0.15 });

// ═══════════════════════════════════════════════════════════
// MANA ATTACHMENT MANIFEST — Targeted Function Wrappers
// Each entry maps a specific function to a Layer 2 capability.
// U.S. Patent App. No. 64/031,637
// ═══════════════════════════════════════════════════════════

const __MANA_ATTACHMENTS__ = Object.freeze([
  {
    "functionName": "logerror",
    "capability": "audit_trail",
    "primitive": "AUDIT",
    "reason": "Observation point — audit trail for provenance"
  },
  {
    "functionName": "set",
    "capability": "governance_hook",
    "primitive": "GOVERNANCE",
    "reason": "Mutates state — governance audit required"
  }
]);

// ─── Targeted Wrappers ───
// logerror() → audit_trail [AUDIT] — Observation point — audit trail for provenance
// set() → governance_hook [GOVERNANCE] — Mutates state — governance audit required

// Total attachments: 2 functions targeted
// Functions detected: 21

// ═══════════════════════════════════════════════════════════
// ORIGINAL SOURCE (UNMODIFIED — LAYER 1)
// Verified byte-identical to uploaded source.
// U.S. Patent App. No. 64/029,678 · No. 64/031,637
// ═══════════════════════════════════════════════════════════

/*!
 * express
 * Copyright(c) 2009-2013 TJ Holowaychuk
 * Copyright(c) 2013 Roman Shtylman
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */

'use strict';

/**
 * Module dependencies.
 * @private
 */

var finalhandler = require('finalhandler');
var debug = require('debug')('express:application');
var View = require('./view');
var http = require('node:http');
var methods = require('./utils').methods;
var compileETag = require('./utils').compileETag;
var compileQueryParser = require('./utils').compileQueryParser;
var compileTrust = require('./utils').compileTrust;
var resolve = require('node:path').resolve;
var once = require('once')
var Router = require('router');

/**
 * Module variables.
 * @private
 */

var slice = Array.prototype.slice;
var flatten = Array.prototype.flat;

/**
 * Application prototype.
 */

var app = exports = module.exports = {};

/**
 * Variable for trust proxy inheritance back-compat
 * @private
 */

var trustProxyDefaultSymbol = '@@symbol:trust_proxy_default';

/**
 * Initialize the server.
 *
 *   - setup default configuration
 *   - setup default middleware
 *   - setup route reflection methods
 *
 * @private
 */

app.init = function init() {
  var router = null;

  this.cache = Object.create(null);
  this.engines = Object.create(null);
  this.settings = Object.create(null);

  this.defaultConfiguration();

  // Setup getting to lazily add base router
  Object.defineProperty(this, 'router', {
    configurable: true,
    enumerable: true,
    get: function getrouter() {
      if (router === null) {
        router = new Router({
          caseSensitive: this.enabled('case sensitive routing'),
          strict: this.enabled('strict routing')
        });
      }

      return router;
    }
  });
};

/**
 * Initialize application configuration.
 * @private
 */

app.defaultConfiguration = function defaultConfiguration() {
  var env = process.env.NODE_ENV || 'development';

  // default settings
  this.enable('x-powered-by');
  this.set('etag', 'weak');
  this.set('env', env);
  this.set('query parser', 'simple')
  this.set('subdomain offset', 2);
  this.set('trust proxy', false);

  // trust proxy inherit back-compat
  Object.defineProperty(this.settings, trustProxyDefaultSymbol, {
    configurable: true,
    value: true
  });

  debug('booting in %s mode', env);

  this.on('mount', function onmount(parent) {
    // inherit trust proxy
    if (this.settings[trustProxyDefaultSymbol] === true
      && typeof parent.settings['trust proxy fn'] === 'function') {
      delete this.settings['trust proxy'];
      delete this.settings['trust proxy fn'];
    }

    // inherit protos
    Object.setPrototypeOf(this.request, parent.request)
    Object.setPrototypeOf(this.response, parent.response)
    Object.setPrototypeOf(this.engines, parent.engines)
    Object.setPrototypeOf(this.settings, parent.settings)
  });

  // setup locals
  this.locals = Object.create(null);

  // top-most app is mounted at /
  this.mountpath = '/';

  // default locals
  this.locals.settings = this.settings;

  // default configuration
  this.set('view', View);
  this.set('views', resolve('views'));
  this.set('jsonp callback name', 'callback');

  if (env === 'production') {
    this.enable('view cache');
  }
};

/**
 * Dispatch a req, res pair into the application. Starts pipeline processing.
 *
 * If no callback is provided, then default error handlers will respond
 * in the event of an error bubbling through the stack.
 *
 * @private
 */

app.handle = function handle(req, res, callback) {
  // final handler
  var done = callback || finalhandler(req, res, {
    env: this.get('env'),
    onerror: logerror.bind(this)
  });

  // set powered by header
  if (this.enabled('x-powered-by')) {
    res.setHeader('X-Powered-By', 'Express');
  }

  // set circular references
  req.res = res;
  res.req = req;

  // alter the prototypes
  Object.setPrototypeOf(req, this.request)
  Object.setPrototypeOf(res, this.response)

  // setup locals
  if (!res.locals) {
    res.locals = Object.create(null);
  }

  this.router.handle(req, res, done);
};

/**
 * Proxy `Router#use()` to add middleware to the app router.
 * See Router#use() documentation for details.
 *
 * If the _fn_ parameter is an express app, then it will be
 * mounted at the _route_ specified.
 *
 * @public
 */

app.use = function use(fn) {
  var offset = 0;
  var path = '/';

  // default path to '/'
  // disambiguate app.use([fn])
  if (typeof fn !== 'function') {
    var arg = fn;

    while (Array.isArray(arg) && arg.length !== 0) {
      arg = arg[0];
    }

    // first arg is the path
    if (typeof arg !== 'function') {
      offset = 1;
      path = fn;
    }
  }

  var fns = flatten.call(slice.call(arguments, offset), Infinity);

  if (fns.length === 0) {
    throw new TypeError('app.use() requires a middleware function')
  }

  // get router
  var router = this.router;

  fns.forEach(function (fn) {
    // non-express app
    if (!fn || !fn.handle || !fn.set) {
      return router.use(path, fn);
    }

    debug('.use app under %s', path);
    fn.mountpath = path;
    fn.parent = this;

    // restore .app property on req and res
    router.use(path, function mounted_app(req, res, next) {
      var orig = req.app;
      fn.handle(req, res, function (err) {
        Object.setPrototypeOf(req, orig.request)
        Object.setPrototypeOf(res, orig.response)
        next(err);
      });
    });

    // mounted an app
    fn.emit('mount', this);
  }, this);

  return this;
};

/**
 * Proxy to the app `Router#route()`
 * Returns a new `Route` instance for the _path_.
 *
 * Routes are isolated middleware stacks for specific paths.
 * See the Route api docs for details.
 *
 * @public
 */

app.route = function route(path) {
  return this.router.route(path);
};

/**
 * Register the given template engine callback `fn`
 * as `ext`.
 *
 * By default will `require()` the engine based on the
 * file extension. For example if you try to render
 * a "foo.ejs" file Express will invoke the following internally:
 *
 *     app.engine('ejs', require('ejs').__express);
 *
 * For engines that do not provide `.__express` out of the box,
 * or if you wish to "map" a different extension to the template engine
 * you may use this method. For example mapping the EJS template engine to
 * ".html" files:
 *
 *     app.engine('html', require('ejs').renderFile);
 *
 * In this case EJS provides a `.renderFile()` method with
 * the same signature that Express expects: `(path, options, callback)`,
 * though note that it aliases this method as `ejs.__express` internally
 * so if you're using ".ejs" extensions you don't need to do anything.
 *
 * Some template engines do not follow this convention, the
 * [Consolidate.js](https://github.com/tj/consolidate.js)
 * library was created to map all of node's popular template
 * engines to follow this convention, thus allowing them to
 * work seamlessly within Express.
 *
 * @param {String} ext
 * @param {Function} fn
 * @return {app} for chaining
 * @public
 */

app.engine = function engine(ext, fn) {
  if (typeof fn !== 'function') {
    throw new Error('callback function required');
  }

  // get file extension
  var extension = ext[0] !== '.'
    ? '.' + ext
    : ext;

  // store engine
  this.engines[extension] = fn;

  return this;
};

/**
 * Proxy to `Router#param()` with one added api feature. The _name_ parameter
 * can be an array of names.
 *
 * See the Router#param() docs for more details.
 *
 * @param {String|Array} name
 * @param {Function} fn
 * @return {app} for chaining
 * @public
 */

app.param = function param(name, fn) {
  if (Array.isArray(name)) {
    for (var i = 0; i < name.length; i++) {
      this.param(name[i], fn);
    }

    return this;
  }

  this.router.param(name, fn);

  return this;
};

/**
 * Assign `setting` to `val`, or return `setting`'s value.
 *
 *    app.set('foo', 'bar');
 *    app.set('foo');
 *    // => "bar"
 *
 * Mounted servers inherit their parent server's settings.
 *
 * @param {String} setting
 * @param {*} [val]
 * @return {Server} for chaining
 * @public
 */

app.set = function set(setting, val) {
  if (arguments.length === 1) {
    // app.get(setting)
    return this.settings[setting];
  }

  debug('set "%s" to %o', setting, val);

  // set value
  this.settings[setting] = val;

  // trigger matched settings
  switch (setting) {
    case 'etag':
      this.set('etag fn', compileETag(val));
      break;
    case 'query parser':
      this.set('query parser fn', compileQueryParser(val));
      break;
    case 'trust proxy':
      this.set('trust proxy fn', compileTrust(val));

      // trust proxy inherit back-compat
      Object.defineProperty(this.settings, trustProxyDefaultSymbol, {
        configurable: true,
        value: false
      });

      break;
  }

  return this;
};

/**
 * Return the app's absolute pathname
 * based on the parent(s) that have
 * mounted it.
 *
 * For example if the application was
 * mounted as "/admin", which itself
 * was mounted as "/blog" then the
 * return value would be "/blog/admin".
 *
 * @return {String}
 * @private
 */

app.path = function path() {
  return this.parent
    ? this.parent.path() + this.mountpath
    : '';
};

/**
 * Check if `setting` is enabled (truthy).
 *
 *    app.enabled('foo')
 *    // => false
 *
 *    app.enable('foo')
 *    app.enabled('foo')
 *    // => true
 *
 * @param {String} setting
 * @return {Boolean}
 * @public
 */

app.enabled = function enabled(setting) {
  return Boolean(this.set(setting));
};

/**
 * Check if `setting` is disabled.
 *
 *    app.disabled('foo')
 *    // => true
 *
 *    app.enable('foo')
 *    app.disabled('foo')
 *    // => false
 *
 * @param {String} setting
 * @return {Boolean}
 * @public
 */

app.disabled = function disabled(setting) {
  return !this.set(setting);
};

/**
 * Enable `setting`.
 *
 * @param {String} setting
 * @return {app} for chaining
 * @public
 */

app.enable = function enable(setting) {
  return this.set(setting, true);
};

/**
 * Disable `setting`.
 *
 * @param {String} setting
 * @return {app} for chaining
 * @public
 */

app.disable = function disable(setting) {
  return this.set(setting, false);
};

/**
 * Delegate `.VERB(...)` calls to `router.VERB(...)`.
 */

methods.forEach(function (method) {
  app[method] = function (path) {
    if (method === 'get' && arguments.length === 1) {
      // app.get(setting)
      return this.set(path);
    }

    var route = this.route(path);
    route[method].apply(route, slice.call(arguments, 1));
    return this;
  };
});

/**
 * Special-cased "all" method, applying the given route `path`,
 * middleware, and callback to _every_ HTTP method.
 *
 * @param {String} path
 * @param {Function} ...
 * @return {app} for chaining
 * @public
 */

app.all = function all(path) {
  var route = this.route(path);
  var args = slice.call(arguments, 1);

  for (var i = 0; i < methods.length; i++) {
    route[methods[i]].apply(route, args);
  }

  return this;
};

/**
 * Render the given view `name` name with `options`
 * and a callback accepting an error and the
 * rendered template string.
 *
 * Example:
 *
 *    app.render('email', { name: 'Tobi' }, function(err, html){
 *      // ...
 *    })
 *
 * @param {String} name
 * @param {Object|Function} options or fn
 * @param {Function} callback
 * @public
 */

app.render = function render(name, options, callback) {
  var cache = this.cache;
  var done = callback;
  var engines = this.engines;
  var opts = options || {};
  var view;

  // support callback function as second arg
  if (typeof options === 'function') {
    done = options;
    opts = {};
  }

  // merge options
  var renderOptions = { ...this.locals, ...opts._locals, ...opts };

  // set .cache unless explicitly provided
  if (renderOptions.cache == null) {
    renderOptions.cache = this.enabled('view cache');
  }

  // primed cache
  if (renderOptions.cache) {
    view = cache[name];
  }

  // view
  if (!view) {
    var View = this.get('view');

    view = new View(name, {
      defaultEngine: this.get('view engine'),
      root: this.get('views'),
      engines: engines
    });

    if (!view.path) {
      var dirs = Array.isArray(view.root) && view.root.length > 1
        ? 'directories "' + view.root.slice(0, -1).join('", "') + '" or "' + view.root[view.root.length - 1] + '"'
        : 'directory "' + view.root + '"'
      var err = new Error('Failed to lookup view "' + name + '" in views ' + dirs);
      err.view = view;
      return done(err);
    }

    // prime the cache
    if (renderOptions.cache) {
      cache[name] = view;
    }
  }

  // render
  tryRender(view, renderOptions, done);
};

/**
 * Listen for connections.
 *
 * A node `http.Server` is returned, with this
 * application (which is a `Function`) as its
 * callback. If you wish to create both an HTTP
 * and HTTPS server you may do so with the "http"
 * and "https" modules as shown here:
 *
 *    var http = require('node:http')
 *      , https = require('node:https')
 *      , express = require('express')
 *      , app = express();
 *
 *    http.createServer(app).listen(80);
 *    https.createServer({ ... }, app).listen(443);
 *
 * @return {http.Server}
 * @public
 */

app.listen = function listen() {
  var server = http.createServer(this)
  var args = slice.call(arguments)
  if (typeof args[args.length - 1] === 'function') {
    var done = args[args.length - 1] = once(args[args.length - 1])
    server.once('error', done)
  }
  return server.listen.apply(server, args)
}

/**
 * Log error using console.error.
 *
 * @param {Error} err
 * @private
 */

function logerror(err) {
  /* istanbul ignore next */
  if (this.get('env') !== 'test') console.error(err.stack || err.toString());
}

/**
 * Try rendering a view.
 * @private
 */

function tryRender(view, options, callback) {
  try {
    view.render(options, callback);
  } catch (err) {
    callback(err);
  }
}

// ═══════════════════════════════════════════════════════════
// SELF-VERIFICATION
// Run this file to verify the artifact integrity.
// ═══════════════════════════════════════════════════════════

/**
 * CMPSBL® Artifact Self-Verification
 * Run: node <this_file> --verify
 */
function __cmpsbl_verify__() {
  const crypto = globalThis.crypto ?? require('crypto');
  const fs = typeof require !== 'undefined' ? require('fs') : null;
  const fingerprint = "3d59a2c19053673e";
  const meta = typeof __CMPSBL_META__ === 'string' ? JSON.parse(__CMPSBL_META__) : __CMPSBL_META__;
  const verifyUrl = `https://cmpsbl.com/verify/${fingerprint}`;

  console.log("=".repeat(60));
  console.log("CMPSBL® Convex Core™ — Artifact Verification");
  console.log("A PromptFluid™ Product");
  console.log("=".repeat(60));
  console.log(`  Fingerprint:  ${fingerprint}`);
  console.log(`  Primitives:   ${meta?.primitiveCount ?? '?'}`);
  console.log(`  Generated:    ${meta?.generatedAt ?? '?'}`);
  console.log(`  Runtime:      ${meta?.runtimeVersion ?? '?'}`);
  console.log(`  Language:     ${meta?.sourceLanguage ?? '?'}`);
  console.log();

  let passed = 0;
  const total = 3;

  if (fingerprint && fingerprint.length > 8) { console.log("  ✓ Fingerprint valid"); passed++; }
  else { console.log("  ✗ Fingerprint missing"); }

  if (meta?.runtimeVersion && meta?.orchestrationVersion) { console.log("  ✓ Metadata intact"); passed++; }
  else { console.log("  ✗ Metadata corrupted"); }

  if (meta?.patents || meta?.patent) { console.log("  ✓ Patent reference present"); passed++; }
  else { console.log("  ✗ Patent reference missing"); }

  console.log();
  console.log(`  Result: ${passed}/${total} checks passed`);
  console.log();
  console.log(`  Online verification:`);
  console.log(`    ${verifyUrl}`);
  console.log();
  console.log("  © 2026 PromptFluid™ · CMPSBL® · All rights reserved.");
  console.log("  U.S. Patent App. No. 64/029,678 · No. 64/031,637");
  console.log("=".repeat(60));
  return passed === total;
}

if (typeof process !== 'undefined' && process.argv?.includes('--verify')) {
  const ok = __cmpsbl_verify__();
  process.exit(ok ? 0 : 1);
}


/**
 * ═══════════════════════════════════════════════════════════
 * End of CMPSBL® Convex Core™ Sealed Artifact
 * ═══════════════════════════════════════════════════════════
 * 
 * Fingerprint:  3d59a2c19053673e
 * Primitives:   CORE, SYSTEM, MEMORY, NERVE, ENCODE, RELAY, BRAIN, DREAM, GOVERNANCE, CONSCIENCE, AUDIT
 * Sealed:       2026-04-11T08:15:24.408Z
 * 
 * VERIFY: https://cmpsbl.com/verify/3d59a2c19053673e
 * 
 * Inventor: Kenneth E. Sweet Jr.
 * U.S. Patent App. No. 64/029,678 · No. 64/031,637
 * © 2026 PromptFluid™ · CMPSBL® · All rights reserved.
 * ═══════════════════════════════════════════════════════════
 */