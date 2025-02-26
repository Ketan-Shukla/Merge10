System.register("chunks:///_virtual/AppRoot.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameAssets.ts', './AudioPlayer.ts', './SaveSystem.ts', './ModalWindowManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, JsonAsset, Prefab, Camera, director, Component, instantiate, GameAssets, AudioPlayer, SaveSystem, ModalWindowManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      JsonAsset = module.JsonAsset;
      Prefab = module.Prefab;
      Camera = module.Camera;
      director = module.director;
      Component = module.Component;
      instantiate = module.instantiate;
    }, function (module) {
      GameAssets = module.GameAssets;
    }, function (module) {
      AudioPlayer = module.AudioPlayer;
    }, function (module) {
      SaveSystem = module.SaveSystem;
    }, function (module) {
      ModalWindowManager = module.ModalWindowManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _class3;
      cclegacy._RF.push({}, "4943dSvt9FBvLizJ1HhFOzg", "AppRoot", undefined);
      // import { Y8 } from "../../Plugins/Y8/Scripts/Y8";
      // import { Analytics } from "./Analytics";
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var AppRoot = exports('AppRoot', (_dec = ccclass("AppRoot"), _dec2 = property(AudioPlayer), _dec3 = property(JsonAsset), _dec4 = property(JsonAsset), _dec5 = property(Prefab), _dec6 = property(Camera), _dec7 = property(ModalWindowManager), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AppRoot, _Component);
        function AppRoot() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "audio", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "settingsAsset", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "engTranslationAsset", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gameAssetsPrefab", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mainCamera", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "modalWindowManager", _descriptor6, _assertThisInitialized(_this));
          _this.saveSystem = void 0;
          _this.liveUserData = void 0;
          _this.gameAssets = void 0;
          return _this;
        }
        var _proto = AppRoot.prototype;
        // public get ScreenFader(): OpenCloseAnimator {
        //     return this.screenFader;
        // }
        // public get Y8(): Y8 {
        //     return this.y8;
        // }
        // public get Analytics(): Analytics {
        //     return this.analytics;
        // }
        _proto.saveUserData = function saveUserData() {
          this.saveSystem.save(this.liveUserData);
        };
        _proto.start = function start() {
          if (AppRoot.Instance == null) {
            AppRoot.instance = this;
            director.addPersistRootNode(this.node);
            this.init();
          } else {
            this.node.destroy();
          }
        };
        _proto.update = function update(deltaTime) {
          // if (this.analytics) this.analytics.update(deltaTime);
        };
        _proto.init = /*#__PURE__*/function () {
          var _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var gameAssetsNode;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  this.saveSystem = new SaveSystem();
                  this.liveUserData = this.saveSystem.load();
                  gameAssetsNode = instantiate(this.gameAssetsPrefab);
                  gameAssetsNode.setParent(this.node);
                  this.gameAssets = gameAssetsNode.getComponent(GameAssets);
                  this.gameAssets.init();
                  this.audio.init(this.LiveUserData.soundVolume, this.LiveUserData.musicVolume);

                // this.screenFader.init();
                // this.screenFader.node.active = false;

                // await this.y8.init();

                // this.analytics = new Analytics(this.y8);
                case 7:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function init() {
            return _init.apply(this, arguments);
          }
          return init;
        }();
        _createClass(AppRoot, [{
          key: "AudioPlayer",
          get: function get() {
            return this.audio;
          }
        }, {
          key: "GameAssets",
          get: function get() {
            return this.gameAssets;
          }
        }, {
          key: "LiveUserData",
          get: function get() {
            return this.liveUserData;
          }
        }, {
          key: "Settings",
          get: function get() {
            return this.settingsAsset.json;
          }
        }, {
          key: "TranslationData",
          get: function get() {
            return this.engTranslationAsset.json;
          }
        }, {
          key: "ModalWindowManager",
          get: function get() {
            return this.modalWindowManager;
          }
        }, {
          key: "MainCamera",
          get: function get() {
            return this.mainCamera;
          }
        }], [{
          key: "Instance",
          get:
          // private analytics: Analytics;

          function get() {
            return this.instance;
          }
        }]);
        return AppRoot;
      }(Component), _class3.instance = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "audio", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "settingsAsset", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "engTranslationAsset", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "gameAssetsPrefab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "mainCamera", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "modalWindowManager", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppRootUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AsyncUtils.ts', './AppRoot.ts'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, cclegacy, delay, AppRoot;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      delay = module.delay;
    }, function (module) {
      AppRoot = module.AppRoot;
    }],
    execute: function () {
      exports('requireAppRootAsync', requireAppRootAsync);
      cclegacy._RF.push({}, "43cfbVDTGJMNrso8wey4dKA", "AppRootUtils", undefined);
      function requireAppRootAsync() {
        return _requireAppRootAsync.apply(this, arguments);
      }
      function _requireAppRootAsync() {
        _requireAppRootAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                console.log("Waiting for app root");
              case 1:
                if (!(AppRoot.Instance == null)) {
                  _context.next = 6;
                  break;
                }
                _context.next = 4;
                return delay(10);
              case 4:
                _context.next = 1;
                break;
              case 6:
                AppRoot.Instance.node.setSiblingIndex(1000); // render on top
                AppRoot.Instance.node.active = false; // forces engine to reorder by hierarchy
                AppRoot.Instance.node.active = true;
                console.log("App root ready");
              case 10:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return _requireAppRootAsync.apply(this, arguments);
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ArrayUtils.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('shuffle', shuffle);
      cclegacy._RF.push({}, "4cd53HZVBlEDYgMNs4P4ylV", "ArrayUtils", undefined);
      function shuffle(array) {
        var shuffledArray = [].concat(array);
        for (var i = shuffledArray.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var _ref = [shuffledArray[j], shuffledArray[i]];
          shuffledArray[i] = _ref[0];
          shuffledArray[j] = _ref[1];
        }
        return shuffledArray;
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AssetManagerWrapper.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ConsoleLogger.ts'], function (exports) {
  var _createClass, cclegacy, _decorator, assetManager, ConsoleLogger;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      assetManager = module.assetManager;
    }, function (module) {
      ConsoleLogger = module.default;
    }],
    execute: function () {
      var _class, _class2;
      cclegacy._RF.push({}, "da634jL/+pMHboatycHIV1V", "AssetManagerWrapper", undefined);
      var ccclass = _decorator.ccclass;
      var AssetManagerWrapper = exports('default', ccclass(_class = (_class2 = /*#__PURE__*/function () {
        function AssetManagerWrapper() {} // Private constructor to enforce singleton

        /**
         * Load an Asset Bundle by name or URL.
         * @param bundleName - Name or URL of the Asset Bundle.
         * @param onComplete - Callback when the bundle is loaded.
         */
        var _proto = AssetManagerWrapper.prototype;
        _proto.loadBundle = function loadBundle(bundleName, onComplete) {
          assetManager.loadBundle(bundleName, function (err, bundle) {
            if (err) {
              ConsoleLogger.instance.error("Failed to load bundle: " + bundleName, err);
              onComplete(err, null);
              return;
            }
            ConsoleLogger.instance.info("Bundle loaded: " + bundleName);
            onComplete(null, bundle);
          });
        }

        /**
         * Load a resource from a specific Asset Bundle.
         * @param bundle - The Asset Bundle instance.
         * @param path - Path to the resource within the bundle.
         * @param type - Type of the resource (e.g., cc.Prefab, cc.Texture2D).
         * @param onComplete - Callback when the resource is loaded.
         */;
        _proto.loadResource = function loadResource(bundle, path, type, onComplete) {
          bundle.load(path, type, function (err, asset) {
            if (err) {
              ConsoleLogger.instance.error("Failed to load resource: " + path, err);
              onComplete(err, null);
              return;
            }
            ConsoleLogger.instance.info("Resource loaded: " + path);
            onComplete(null, asset);
          });
        }

        /**
         * Load a scene from a specific Asset Bundle.
         * @param bundle - The Asset Bundle instance.
         * @param sceneName - Name of the scene.
         * @param onComplete - Callback when the scene is loaded.
         */;
        _proto.loadScene = function loadScene(bundle, sceneName, onComplete) {
          bundle.loadScene(sceneName, function (err, scene) {
            if (err) {
              ConsoleLogger.instance.error("Failed to load scene: " + sceneName, err);
              onComplete(err, null);
              return;
            }
            ConsoleLogger.instance.info("Scene loaded: " + sceneName);
            onComplete(null, scene);
          });
        }

        /**
         * Release a resource from the cache.
         * @param asset - The asset to release.
         */;
        _proto.releaseResource = function releaseResource(asset) {
          assetManager.releaseAsset(asset);
          ConsoleLogger.instance.info("Resource released: " + asset.name);
        }

        /**
         * Release all resources in a specific Asset Bundle.
         * @param bundle - The Asset Bundle instance.
         */;
        _proto.releaseBundle = function releaseBundle(bundle) {
          bundle.releaseAll();
          ConsoleLogger.instance.info("All resources released from bundle: " + bundle.name);
        }

        /**
         * Remove an Asset Bundle from the cache.
         * @param bundle - The Asset Bundle instance.
         */;
        _proto.removeBundle = function removeBundle(bundle) {
          assetManager.removeBundle(bundle);
          ConsoleLogger.instance.info("Bundle removed: " + bundle.name);
        };
        _createClass(AssetManagerWrapper, null, [{
          key: "instance",
          get:
          // Singleton pattern to ensure a single instance
          function get() {
            if (!this._instance) {
              this._instance = new AssetManagerWrapper();
            }
            return this._instance;
          }
        }]);
        return AssetManagerWrapper;
      }(), _class2._instance = null, _class2)) || _class);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AsyncUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, cclegacy;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('delay', delay);
      cclegacy._RF.push({}, "a920eXh9GlPS62B+ifUnwOJ", "AsyncUtils", undefined);
      function delay(_x) {
        return _delay.apply(this, arguments);
      }
      function _delay() {
        _delay = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(ms) {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", new Promise(function (resolve) {
                  return setTimeout(resolve, ms);
                }));
              case 1:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return _delay.apply(this, arguments);
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AudioAssets.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, AudioClip, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      AudioClip = module.AudioClip;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "20793WnayxKkrU5an4AntLg", "AudioAssets", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var AudioAssets = exports('AudioAssets', (_dec = ccclass("AudioAssets"), _dec2 = property(AudioClip), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AudioAssets, _Component);
        function AudioAssets() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "buttonClick", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        return AudioAssets;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "buttonClick", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AudioPlayer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, AudioSource, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      AudioSource = module.AudioSource;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "958e24+jRZMdr5ue2HNRuRM", "AudioPlayer", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var AudioPlayer = exports('AudioPlayer', (_dec = ccclass("AudioPlayer"), _dec2 = property(AudioSource), _dec3 = property(AudioSource), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AudioPlayer, _Component);
        function AudioPlayer() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "soundSource", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "musicSource", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = AudioPlayer.prototype;
        _proto.init = function init(soundVolume, musicVolume) {
          this.setSoundVolume(soundVolume);
          this.setMusicVolume(musicVolume);
        };
        _proto.setSoundVolume = function setSoundVolume(volume) {
          this.soundSource.volume = volume;
        };
        _proto.setMusicVolume = function setMusicVolume(volume) {
          this.musicSource.volume = volume;
        };
        _proto.playSound = function playSound(clip) {
          this.soundSource.playOneShot(clip);
        };
        _proto.playMusic = function playMusic(clip) {
          this.musicSource.stop();
          this.musicSource.clip = clip;
          this.musicSource.play();
        };
        _createClass(AudioPlayer, [{
          key: "SoundVolume",
          get: function get() {
            return this.soundSource.volume;
          }
        }, {
          key: "MusicVolume",
          get: function get() {
            return this.musicSource.volume;
          }
        }]);
        return AudioPlayer;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "soundSource", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "musicSource", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AudioSettingsModalWindow.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AppRoot.ts', './ModalWindow.ts', './UIButton.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Slider, AppRoot, ModalWindow, UIButton;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Slider = module.Slider;
    }, function (module) {
      AppRoot = module.AppRoot;
    }, function (module) {
      ModalWindow = module.ModalWindow;
    }, function (module) {
      UIButton = module.UIButton;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "0c0521PyCxK/6XtpzF/acnv", "AudioSettingsModalWindow", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var AudioSettingsModalWindow = exports('AudioSettingsModalWindow', (_dec = ccclass("AudioSettingsModalWindow"), _dec2 = property(Slider), _dec3 = property(Slider), _dec4 = property(UIButton), _dec(_class = (_class2 = /*#__PURE__*/function (_ModalWindow) {
        _inheritsLoose(AudioSettingsModalWindow, _ModalWindow);
        function AudioSettingsModalWindow() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ModalWindow.call.apply(_ModalWindow, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "soundVolumeSlider", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "musicVolumeSlider", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "okButton", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = AudioSettingsModalWindow.prototype;
        _proto.setup = function setup() {
          this.soundVolumeSlider.progress = AppRoot.Instance.AudioPlayer.SoundVolume;
          this.musicVolumeSlider.progress = AppRoot.Instance.AudioPlayer.MusicVolume;
          this.soundVolumeSlider.node.on("slide", this.updateSoundVolume, this);
          this.musicVolumeSlider.node.on("slide", this.updateMusicVolume, this);
          this.okButton.InteractedEvent.on(this.dismiss, this);
        };
        _proto.updateSoundVolume = function updateSoundVolume() {
          AppRoot.Instance.AudioPlayer.setSoundVolume(this.soundVolumeSlider.progress);
        };
        _proto.updateMusicVolume = function updateMusicVolume() {
          AppRoot.Instance.AudioPlayer.setMusicVolume(this.musicVolumeSlider.progress);
        };
        _proto.dismiss = function dismiss(result) {
          _ModalWindow.prototype.dismiss.call(this, result);
          var userData = AppRoot.Instance.LiveUserData;
          userData.musicVolume = this.musicVolumeSlider.progress;
          userData.soundVolume = this.soundVolumeSlider.progress;
          AppRoot.Instance.saveUserData();
        };
        return AudioSettingsModalWindow;
      }(ModalWindow), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "soundVolumeSlider", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "musicVolumeSlider", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "okButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BlockSpawner.ts", ['cc', './TileItemUI.ts', './GameConstants.ts', './NumberGenerator.ts'], function (exports) {
  var cclegacy, _decorator, instantiate, TileItemUI, EnMechanicType, NumberGenerator;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      instantiate = module.instantiate;
    }, function (module) {
      TileItemUI = module.TileItemUI;
    }, function (module) {
      EnMechanicType = module.EnMechanicType;
    }, function (module) {
      NumberGenerator = module.default;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "aa257jxQllMHoFc0PQUlplH", "BlockSpawner", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BlockSpawner = exports('default', ccclass(_class = /*#__PURE__*/function () {
        function BlockSpawner(blockPrefab, gameBoard, tileSprites) {
          this.blockPrefab = void 0;
          this.gameBoard = void 0;
          this.tileSprites = void 0;
          this.numberGenerator = void 0;
          this.blockPrefab = blockPrefab;
          this.gameBoard = gameBoard;
          this.tileSprites = tileSprites;
          this.numberGenerator = new NumberGenerator();
        }
        var _proto = BlockSpawner.prototype;
        _proto.spawnBlock = function spawnBlock(r, c) {
          var block = instantiate(this.blockPrefab);
          var randomNumber = Math.floor(Math.random() * 7) + 1;
          block.getComponent(TileItemUI).init({
            row: r,
            col: c,
            tilenumber: randomNumber,
            tileSprite: this.tileSprites.getIconByNumber(randomNumber)
          });
          this.gameBoard.addChild(block);
          return block;
        };
        _proto.spawnBlockWithNum = function spawnBlockWithNum(r, c, num) {
          var block = instantiate(this.blockPrefab);
          block.getComponent(TileItemUI).init({
            row: r,
            col: c,
            tilenumber: num,
            tileSprite: this.tileSprites.getIconByNumber(num)
          });
          this.gameBoard.addChild(block);
          return block;
        };
        _proto.spawnUpcomingTile = function spawnUpcomingTile(upcomingNode) {
          var tile = this.spawnBlock(0, 0);
          tile.setPosition(upcomingNode.position);
          return tile;
        };
        _proto.spawnNewRow = function spawnNewRow(mechanic, rowSize) {
          var row = [];
          switch (mechanic) {
            case EnMechanicType.HighEnder:
              return this.getHighEnders(rowSize);
          }
          return row;
        };
        _proto.getHighEnders = function getHighEnders(rowSize) {
          var row = [];
          var nos = this.numberGenerator.generateRandomHighNos(rowSize + 1);
          for (var i = 0; i <= rowSize; i++) {
            row.push(this.spawnBlockWithNum(0, i, nos.pop()));
          }
          return row;
        };
        return BlockSpawner;
      }()) || _class);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ChestModalWindow.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ModalWindow.ts', './UIButton.ts', './LevelUpSkill.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, randomRangeInt, ModalWindow, UIButton, LevelUpSkill;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      randomRangeInt = module.randomRangeInt;
    }, function (module) {
      ModalWindow = module.ModalWindow;
    }, function (module) {
      UIButton = module.UIButton;
    }, function (module) {
      LevelUpSkill = module.LevelUpSkill;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "422c899zDhMapxhQgwpGmEL", "ChestModalWindow", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ChestModalWindow = exports('ChestModalWindow', (_dec = ccclass("ChestModalWindow"), _dec2 = property(LevelUpSkill), _dec3 = property(UIButton), _dec(_class = (_class2 = /*#__PURE__*/function (_ModalWindow) {
        _inheritsLoose(ChestModalWindow, _ModalWindow);
        function ChestModalWindow() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ModalWindow.call.apply(_ModalWindow, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "levelUpSkill", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "okButton", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = ChestModalWindow.prototype;
        _proto.setup = function setup(params) {
          var _this2 = this;
          var randomIndex = randomRangeInt(0, params.availableUpgrades.length - 1);
          var skillToUpgrade = params.availableUpgrades[randomIndex];
          this.levelUpSkill.init(skillToUpgrade, params.translationData);
          this.okButton.InteractedEvent.on(function () {
            return _this2.dismiss(skillToUpgrade);
          }, this);
        };
        return ChestModalWindow;
      }(ModalWindow), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "levelUpSkill", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "okButton", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ConsoleLogger.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy, _decorator;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }],
    execute: function () {
      var _class, _class2;
      cclegacy._RF.push({}, "0d80aP1ejhGhbBbCYP2k0Yr", "ConsoleLogger", undefined);
      var ccclass = _decorator.ccclass;
      var ConsoleLogger = exports('default', ccclass(_class = (_class2 = /*#__PURE__*/function () {
        function ConsoleLogger() {
          this._logLevel = ConsoleLogger.LOG_LEVEL.DEBUG;
        } // Private constructor to enforce singleton

        /**
         * Set the log level.
         * @param level - The log level (e.g., ConsoleLogger.LOG_LEVEL.INFO).
         */
        var _proto = ConsoleLogger.prototype;
        _proto.setLogLevel = function setLogLevel(level) {
          this._logLevel = level;
          this.debug("Log level set to: " + level);
        }

        /**
         * Log a debug message.
         * @param message - The message to log.
         * @param optionalParams - Additional parameters to log.
         */;
        _proto.debug = function debug(message) {
          if (this._logLevel <= ConsoleLogger.LOG_LEVEL.DEBUG) {
            var _console;
            for (var _len = arguments.length, optionalParams = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              optionalParams[_key - 1] = arguments[_key];
            }
            (_console = console).log.apply(_console, ["[DEBUG] " + this.getTimestamp() + " - " + message].concat(optionalParams));
          }
        }

        /**
         * Log an info message.
         * @param message - The message to log.
         * @param optionalParams - Additional parameters to log.
         */;
        _proto.info = function info(message) {
          if (this._logLevel <= ConsoleLogger.LOG_LEVEL.INFO) {
            var _console2;
            for (var _len2 = arguments.length, optionalParams = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              optionalParams[_key2 - 1] = arguments[_key2];
            }
            (_console2 = console).info.apply(_console2, ["[INFO] " + this.getTimestamp() + " - " + message].concat(optionalParams));
          }
        }

        /**
         * Log a warning message.
         * @param message - The message to log.
         * @param optionalParams - Additional parameters to log.
         */;
        _proto.warn = function warn(message) {
          if (this._logLevel <= ConsoleLogger.LOG_LEVEL.WARN) {
            var _console3;
            for (var _len3 = arguments.length, optionalParams = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
              optionalParams[_key3 - 1] = arguments[_key3];
            }
            (_console3 = console).warn.apply(_console3, ["[WARN] " + this.getTimestamp() + " - " + message].concat(optionalParams));
          }
        }

        /**
         * Log an error message.
         * @param message - The message to log.
         * @param optionalParams - Additional parameters to log.
         */;
        _proto.error = function error(message) {
          if (this._logLevel <= ConsoleLogger.LOG_LEVEL.ERROR) {
            var _console4;
            for (var _len4 = arguments.length, optionalParams = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
              optionalParams[_key4 - 1] = arguments[_key4];
            }
            (_console4 = console).error.apply(_console4, ["[ERROR] " + this.getTimestamp() + " - " + message].concat(optionalParams));
          }
        }

        /**
         * Get the current timestamp in a readable format.
         * @returns The formatted timestamp.
         */;
        _proto.getTimestamp = function getTimestamp() {
          var now = new Date();
          return now.toLocaleDateString() + " " + now.toLocaleTimeString();
        };
        _createClass(ConsoleLogger, null, [{
          key: "instance",
          get:
          // Default log level
          // Singleton pattern to ensure a single instance
          function get() {
            if (!this._instance) {
              this._instance = new ConsoleLogger();
            }
            return this._instance;
          }
        }]);
        return ConsoleLogger;
      }(), _class2._instance = null, _class2.LOG_LEVEL = {
        DEBUG: 0,
        INFO: 1,
        WARN: 2,
        ERROR: 3,
        NONE: 4 // Disables all logging
      }, _class2)) || _class);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Game.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AppRoot.ts', './AppRootUtils.ts', './AsyncUtils.ts', './GameAudioAdapter.ts', './KeyboardInput.ts', './MultiInput.ts', './VirtualJoystic.ts', './GameModalLauncher.ts', './Pauser.ts', './GameUI.ts', './Upgrader.ts', './UnitLevel.ts', './GameBoardManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Canvas, Node, Component, KeyCode, AppRoot, requireAppRootAsync, delay, GameAudioAdapter, KeyboardInput, MultiInput, VirtualJoystic, GameModalLauncher, Pauser, GameUI, Upgrader, UnitLevel, GameBoardManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Canvas = module.Canvas;
      Node = module.Node;
      Component = module.Component;
      KeyCode = module.KeyCode;
    }, function (module) {
      AppRoot = module.AppRoot;
    }, function (module) {
      requireAppRootAsync = module.requireAppRootAsync;
    }, function (module) {
      delay = module.delay;
    }, function (module) {
      GameAudioAdapter = module.GameAudioAdapter;
    }, function (module) {
      KeyboardInput = module.KeyboardInput;
    }, function (module) {
      MultiInput = module.MultiInput;
    }, function (module) {
      VirtualJoystic = module.VirtualJoystic;
    }, function (module) {
      GameModalLauncher = module.GameModalLauncher;
    }, function (module) {
      Pauser = module.Pauser;
    }, function (module) {
      GameUI = module.GameUI;
    }, function (module) {
      Upgrader = module.Upgrader;
    }, function (module) {
      UnitLevel = module.UnitLevel;
    }, function (module) {
      GameBoardManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _class3;
      cclegacy._RF.push({}, "5faa9kT4WdAFJLecGHhA+VX", "Game", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Game = exports('Game', (_dec = ccclass("Game"), _dec2 = property(VirtualJoystic), _dec3 = property(GameUI), _dec4 = property(Canvas), _dec5 = property(GameAudioAdapter), _dec6 = property(Node), _dec7 = property(GameBoardManager), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Game, _Component);
        function Game() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "virtualJoystic", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gameUI", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gameCanvas", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gameAudioAdapter", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "blackScreen", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gameBoard", _descriptor6, _assertThisInitialized(_this));
          _this.gamePauser = new Pauser();
          _this.gameResult = void 0;
          _this.timeAlive = 0;
          return _this;
        }
        var _proto = Game.prototype;
        _proto.start = function start() {
          this.gamePauser.pause();
          Game.instance = this;
          this.blackScreen.active = true;
        };
        _proto.play = /*#__PURE__*/function () {
          var _play = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(userData, settings, translationData, testValues) {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this.setup(userData, settings, translationData, testValues);
                case 2:
                  // AppRoot.Instance.Analytics.gameStart();

                  this.gamePauser.resume();
                  this.blackScreen.active = false;
                case 4:
                  if (this.gameResult.hasExitManually) {
                    _context.next = 9;
                    break;
                  }
                  _context.next = 7;
                  return delay(100);
                case 7:
                  _context.next = 4;
                  break;
                case 9:
                  this.gameBoard.ChooseSkillEvent.off(this.showLevelCompletePopup);
                  this.gamePauser.pause();
                  Game.instance = null;
                  this.gameResult.score = this.timeAlive;
                  if (this.gameResult.hasExitManually) {
                    _context.next = 19;
                    break;
                  }
                  // AppRoot.Instance.Analytics.goldPerRun(this.gameResult.goldCoins);
                  // AppRoot.Instance.Analytics.gameEnd(this.gameResult.score);
                  this.gameResult.sessionData = null;
                  _context.next = 17;
                  return delay(2000);
                case 17:
                  _context.next = 19;
                  break;
                case 19:
                  return _context.abrupt("return", this.gameResult);
                case 20:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function play(_x, _x2, _x3, _x4) {
            return _play.apply(this, arguments);
          }
          return play;
        }();
        _proto.exitGame = function exitGame() {
          this.gameResult.hasExitManually = true;
        };
        _proto.resumeGame = function resumeGame() {
          this.gameBoard.startNewGame();
        };
        _proto.update = function update(deltaTime) {
          if (this.gamePauser.IsPaused) return;
          this.timeAlive += deltaTime;
          this.gameUI.updateTimeAlive(this.timeAlive);
        };
        _proto.setup = /*#__PURE__*/function () {
          var _setup = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(userData, settings, translationData, testValues) {
            var wasd, arrowKeys, upgrader, modalLauncher, levels;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return requireAppRootAsync();
                case 2:
                  this.gameCanvas.cameraComponent = AppRoot.Instance.MainCamera;
                  this.gameResult = new GameResult();
                  this.virtualJoystic.init();
                  wasd = new KeyboardInput(KeyCode.KEY_W, KeyCode.KEY_S, KeyCode.KEY_A, KeyCode.KEY_D);
                  arrowKeys = new KeyboardInput(KeyCode.ARROW_UP, KeyCode.ARROW_DOWN, KeyCode.ARROW_LEFT, KeyCode.ARROW_RIGHT);
                  new MultiInput([this.virtualJoystic, wasd, arrowKeys]);
                  upgrader = new Upgrader(settings.upgrades);
                  modalLauncher = new GameModalLauncher(AppRoot.Instance.ModalWindowManager, this.gamePauser, upgrader, translationData);
                  levels = new UnitLevel([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 112, 116, 130, 146, 154, 174, 196, 220], 1.5);
                  this.gameUI.init(modalLauncher, this.gameResult, levels);
                  this.gameBoard.ChooseSkillEvent.on(this.showLevelCompletePopup, this);
                  if (testValues) {
                    this.timeAlive += testValues.startTime;
                  }
                  this.gameAudioAdapter.init();
                case 15:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function setup(_x5, _x6, _x7, _x8) {
            return _setup.apply(this, arguments);
          }
          return setup;
        }();
        _proto.showLevelCompletePopup = function showLevelCompletePopup(levelCompleteData) {
          this.gameResult.sessionData = levelCompleteData;
          this.gameUI.showLevelCompletePopup(levelCompleteData);
        };
        _createClass(Game, null, [{
          key: "Instance",
          get: function get() {
            return this.instance;
          }
        }]);
        return Game;
      }(Component), _class3.instance = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "virtualJoystic", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "gameUI", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "gameCanvas", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "gameAudioAdapter", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "blackScreen", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "gameBoard", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      var GameResult = exports('GameResult', function GameResult() {
        this.hasExitManually = false;
        this.goldCoins = 0;
        this.score = 0;
        this.sessionData = void 0;
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameAssets.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioAssets.ts', './MetaUpgradeIcons.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Component, AudioAssets, MetaUpgradeIcons;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      AudioAssets = module.AudioAssets;
    }, function (module) {
      MetaUpgradeIcons = module.MetaUpgradeIcons;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "564e96LsN1Hzbs2aO5hhzLF", "GameAssets", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GameAssets = exports('GameAssets', (_dec = ccclass("GameAssets"), _dec2 = property(MetaUpgradeIcons), _dec3 = property(AudioAssets), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameAssets, _Component);
        function GameAssets() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "metaUpgradeIcons", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "audioAssets", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = GameAssets.prototype;
        _proto.init = function init() {
          this.metaUpgradeIcons.init();
        };
        _createClass(GameAssets, [{
          key: "MetaUpgradeIcons",
          get: function get() {
            return this.metaUpgradeIcons;
          }
        }, {
          key: "AudioAssets",
          get: function get() {
            return this.audioAssets;
          }
        }]);
        return GameAssets;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "metaUpgradeIcons", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "audioAssets", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameAudioAdapter.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AppRoot.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, AudioClip, Component, AppRoot;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      AudioClip = module.AudioClip;
      Component = module.Component;
    }, function (module) {
      AppRoot = module.AppRoot;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14;
      cclegacy._RF.push({}, "eb842QdTMFOUJEdwMiA7AJN", "GameAudioAdapter", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GameAudioAdapter = exports('GameAudioAdapter', (_dec = ccclass("GameAudioAdapter"), _dec2 = property(AudioClip), _dec3 = property(AudioClip), _dec4 = property(AudioClip), _dec5 = property(AudioClip), _dec6 = property(AudioClip), _dec7 = property(AudioClip), _dec8 = property(AudioClip), _dec9 = property(AudioClip), _dec10 = property(AudioClip), _dec11 = property(AudioClip), _dec12 = property(AudioClip), _dec13 = property(AudioClip), _dec14 = property(AudioClip), _dec15 = property(AudioClip), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameAudioAdapter, _Component);
        function GameAudioAdapter() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "music", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "enemyHit", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "playerHit", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "playerDeath", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "weaponSwing", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "xpPickup", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "goldPickup", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "healthPotionPickup", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "magnetPickup", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "chestPickup", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "levelUp", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "horizontalProjectileLaunch", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "diagonalProjectileLaunch", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "haloProjectileLaunch", _descriptor14, _assertThisInitialized(_this));
          _this.audioPlayer = void 0;
          return _this;
        }
        var _proto = GameAudioAdapter.prototype;
        _proto.init = function init() {
          AppRoot.Instance.AudioPlayer.playMusic(this.music);
          this.audioPlayer = AppRoot.Instance.AudioPlayer;
          // this.player = player;

          // player.Weapon.WeaponStrikeEvent.on(() => this.audioPlayer.playSound(this.weaponSwing), this);
          // player.Level.LevelUpEvent.on(() => this.audioPlayer.playSound(this.levelUp), this);
        };

        _proto.addEnemyListeners = function addEnemyListeners() {
          // enemy.Health.HealthPointsChangeEvent.on(this.playEnemyHitSound, this);
        };
        _proto.tryPlayPlayerHitSound = function tryPlayPlayerHitSound(healthChange) {
          if (healthChange < 0) {
            this.audioPlayer.playSound(this.playerHit);
          }

          // if (!this.player.Health.IsAlive) {
          //     this.audioPlayer.playSound(this.playerDeath);
          // }
        };

        _proto.playEnemyHitSound = function playEnemyHitSound() {
          this.audioPlayer.playSound(this.enemyHit);
        };
        _proto.playPickupItemSound = function playPickupItemSound(itemType) {
          var clipToPlay;
          // switch (itemType) {
          //     case ItemType.XP:
          //         clipToPlay = this.xpPickup;
          //         break;
          //     case ItemType.Gold:
          //         clipToPlay = this.goldPickup;
          //         break;
          //     case ItemType.HealthPotion:
          //         clipToPlay = this.healthPotionPickup;
          //         break;
          //     case ItemType.Magnet:
          //         clipToPlay = this.magnetPickup;
          //         break;
          //     case ItemType.Chest:
          //         clipToPlay = this.chestPickup;
          //         break;
          //     default:
          //         break;
          // }

          this.audioPlayer.playSound(clipToPlay);
        };
        return GameAudioAdapter;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "music", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "enemyHit", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "playerHit", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "playerDeath", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "weaponSwing", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "xpPickup", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "goldPickup", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "healthPotionPickup", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "magnetPickup", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "chestPickup", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "levelUp", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "horizontalProjectileLaunch", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "diagonalProjectileLaunch", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "haloProjectileLaunch", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameBoardManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BlockSpawner.ts', './MatchChecker.ts', './TileItemUI.ts', './ScoreManager.ts', './GameModels.ts', './GridManager.ts', './TileAnimationManager.ts', './SerialisedAssets.ts', './Signal.ts', './TurnManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Prefab, Node, Button, Vec2, Vec3, Component, BlockSpawner, MatchChecker, TileItemUI, ScoreManager, PositionData, EnGameType, GridManager, TileAnimationManager, SerialisedAssets, Signal, TurnManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Node = module.Node;
      Button = module.Button;
      Vec2 = module.Vec2;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      BlockSpawner = module.default;
    }, function (module) {
      MatchChecker = module.default;
    }, function (module) {
      TileItemUI = module.TileItemUI;
    }, function (module) {
      ScoreManager = module.default;
    }, function (module) {
      PositionData = module.PositionData;
      EnGameType = module.EnGameType;
    }, function (module) {
      GridManager = module.GridManager;
    }, function (module) {
      TileAnimationManager = module.TileAnimationManager;
    }, function (module) {
      SerialisedAssets = module.SerialisedAssets;
    }, function (module) {
      Signal = module.Signal;
    }, function (module) {
      TurnManager = module.TurnManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _class3;
      cclegacy._RF.push({}, "82f31CwLepDy4SyiPOlUCRP", "GameBoardManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GameBoardManager = exports('default', (_dec = property(Prefab), _dec2 = property(Number), _dec3 = property(Number), _dec4 = property(Number), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Button), _dec10 = property(Vec2), _dec11 = property(ScoreManager), _dec12 = property(Number), _dec13 = property(SerialisedAssets), ccclass(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameBoardManager, _Component);
        function GameBoardManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "blockPrefab", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gridSize", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tileSpacing", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tileSpacingY", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gameBoard", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "targetPositionBottomRow", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "targetPositionLeftMostCol", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "upcomingTileNode", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "playBtn", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tileItemSize", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scoreManager", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dropSpeed", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tileSprites", _descriptor13, _assertThisInitialized(_this));
          _this.levelCompleteEvent = new Signal();
          _this.gridManager = void 0;
          _this.animationManager = void 0;
          _this.uiManager = void 0;
          // private grid: Node[][] = [];
          _this.blockSpawner = void 0;
          _this.turnManager = void 0;
          _this.matchChecker = void 0;
          _this.nextTile = void 0;
          _this.bottomLeftTilePos = void 0;
          _this.positionData = void 0;
          _this.isBusy = false;
          _this.turnConfig = void 0;
          return _this;
        }
        var _proto = GameBoardManager.prototype;
        _proto.Speed = function Speed() {
          return this.dropSpeed;
        };
        _proto.start = function start() {
          GameBoardManager.Instance = this;
          this.positionData = new PositionData(new Vec3(this.targetPositionLeftMostCol.position.x, this.targetPositionBottomRow.position.y, 0), this.tileItemSize.x, this.tileItemSize.y, this.tileSpacing, this.tileSpacingY);
          this.blockSpawner = new BlockSpawner(this.blockPrefab, this.gameBoard, this.tileSprites);
          this.gridManager = new GridManager(this.gridSize, this.positionData, this.blockSpawner);
          this.turnManager = new TurnManager();
          this.scoreManager.init(this.turnManager.createTurnsArray());
          this.turnConfig = this.turnManager.createTurnsArray();
          this.animationManager = new TileAnimationManager();
          this.bottomLeftTilePos = new Vec3(this.targetPositionLeftMostCol.position.x, this.targetPositionBottomRow.position.y, 0); // Adjust based on your grid cell size
          this.matchChecker = new MatchChecker(this.gridManager, this.scoreManager, this.positionData);
          this.playBtn.node.parent.active = true;
        };
        _proto.startNewGame = function startNewGame() {
          this.cleanUp();
          this.gridManager.createGrid();
          this.spawnInitialBlocks();
          this.spawnUpcomingTile();
          this.isBusy = false;
        };
        _proto.onClickPlayBtn = function onClickPlayBtn() {
          this.playBtn.node.parent.active = false;
          this.startNewGame();
        };
        _proto.cleanUp = function cleanUp() {
          this.gameBoard.destroyAllChildren();
        };
        _proto.onLevelComplete = function onLevelComplete() {
          this.levelCompleteEvent.trigger(this.getSessionData());
        };
        _proto.getSessionData = function getSessionData() {
          var sessionData = {
            gameType: EnGameType.SOLO,
            score: this.scoreManager.getScore(),
            highScore: this.scoreManager.getHighScore(),
            averageScore: this.scoreManager.getAverageScore(),
            sequence: this.scoreManager.getSequenceScore(),
            levelReached: this.scoreManager.getLevel(),
            blocksDropped: 0
          };
          return sessionData;
        };
        _proto.onClickColumnSelected = function onClickColumnSelected(event, customEventData) {
          console.log(customEventData);
          if (this.isBusy) return;
          this.isBusy = true;
          this.scoreManager.updateThrows();
          this.onColumnSelected(Number(customEventData));
        };
        _proto.spawnUpcomingTile = function spawnUpcomingTile() {
          this.nextTile = this.blockSpawner.spawnUpcomingTile(this.upcomingTileNode);
        };
        _proto.spawnInitialBlocks = function spawnInitialBlocks() {
          var noOfTilesToSpawn = Math.floor(Math.random() * 5);
          for (var i = 0; i < 3; i++) {
            this.spawnBlockAtRandomColumn();
          }
          for (var _i = 0; _i < noOfTilesToSpawn; _i++) {
            this.spawnBlockAtRandomColumn();
          }
        };
        _proto.spawnBlockAtRandomColumn = /*#__PURE__*/function () {
          var _spawnBlockAtRandomColumn = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var column, row, block, targetPosition;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  column = this.getRandomColumn();
                  row = this.gridManager.findBottommostEmptyRow(column);
                  if (!(row === -1)) {
                    _context.next = 4;
                    break;
                  }
                  return _context.abrupt("return");
                case 4:
                  block = this.blockSpawner.spawnBlock(row, column);
                  this.gridManager.updateCell(row, column, block);
                  targetPosition = this.gridManager.getTilePosition(row, column);
                  block.setPosition(targetPosition);
                  _context.next = 10;
                  return this.applyGravityAndProcessMatches();
                case 10:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function spawnBlockAtRandomColumn() {
            return _spawnBlockAtRandomColumn.apply(this, arguments);
          }
          return spawnBlockAtRandomColumn;
        }();
        _proto.applyGravityAndProcessMatches = /*#__PURE__*/function () {
          var _applyGravityAndProcessMatches = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var hasMatches;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  hasMatches = true;
                case 1:
                  if (!hasMatches) {
                    _context2.next = 9;
                    break;
                  }
                  _context2.next = 4;
                  return this.applyGravity();
                case 4:
                  _context2.next = 6;
                  return this.matchChecker.checkMatches();
                case 6:
                  hasMatches = _context2.sent;
                  _context2.next = 1;
                  break;
                case 9:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function applyGravityAndProcessMatches() {
            return _applyGravityAndProcessMatches.apply(this, arguments);
          }
          return applyGravityAndProcessMatches;
        }();
        _proto.applyGravity = /*#__PURE__*/function () {
          var _applyGravity = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var promises, grid, col, emptyRow, row, block, tileItem, spriteFrame, targetPos;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  promises = [];
                  grid = this.gridManager.getGrid();
                  for (col = 0; col < grid[0].length; col++) {
                    emptyRow = -1;
                    for (row = 0; row < grid.length; row++) {
                      if (grid[row][col]) {
                        if (emptyRow !== -1) {
                          block = grid[row][col];
                          grid[emptyRow][col] = block;
                          grid[row][col] = null;
                          // Update tile state:
                          tileItem = block.getComponent(TileItemUI);
                          spriteFrame = this.tileSprites.getIconByNumber(tileItem.TileNum);
                          tileItem.init({
                            row: emptyRow,
                            col: col,
                            tilenumber: tileItem.TileNum,
                            tileSprite: spriteFrame
                          });
                          targetPos = this.gridManager.getTilePosition(emptyRow, col);
                          promises.push(this.animationManager.animateTileDrop(block, block.position, targetPos, this.dropSpeed));
                          emptyRow++;
                        }
                      } else if (emptyRow === -1) {
                        emptyRow = row;
                      }
                    }
                  }
                  _context3.next = 5;
                  return Promise.all(promises);
                case 5:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function applyGravity() {
            return _applyGravity.apply(this, arguments);
          }
          return applyGravity;
        }();
        _proto.getRandomColumn = function getRandomColumn() {
          return Math.floor(Math.random() * this.gridSize);
        };
        _proto.onColumnSelected = function onColumnSelected(column) {
          var row = this.gridManager.findBottommostEmptyRow(column);

          // if (row === -1) {
          //     this.isBusy = false;
          //     this.playBtn.node.active =  true;
          //     return;
          // }
          var tileItem = this.nextTile.getComponent(TileItemUI);
          tileItem.SetRowCol(row, column);
          this.spawnBlockSpecifiedPosition(row, column, this.nextTile);
        };
        _proto.spawnBlockSpecifiedPosition = /*#__PURE__*/function () {
          var _spawnBlockSpecifiedPosition = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(row, column, block) {
            var targetPosition;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  this.gridManager.updateCell(row, column, block);
                  targetPosition = this.gridManager.getTilePosition(row, column);
                  block.setPosition(new Vec3(targetPosition.x, this.upcomingTileNode.position.y, this.upcomingTileNode.position.z));
                  _context4.next = 5;
                  return this.animationManager.animateTileDrop(block, block.position, targetPosition, this.dropSpeed);
                case 5:
                  _context4.next = 7;
                  return this.applyGravityAndProcessMatches();
                case 7:
                  this.spawnUpcomingTile();
                  if (!this.gridManager.CheckIfNoEmptyPlaces()) {
                    _context4.next = 11;
                    break;
                  }
                  // this.playBtn.node.parent.active =  true;
                  this.onLevelComplete();
                  return _context4.abrupt("return");
                case 11:
                  if (!(this.scoreManager.getTurns() <= 0)) {
                    _context4.next = 15;
                    break;
                  }
                  _context4.next = 14;
                  return this.spawnNewRow();
                case 14:
                  this.scoreManager.updateThrows();
                case 15:
                  this.isBusy = false;
                case 16:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
          function spawnBlockSpecifiedPosition(_x, _x2, _x3) {
            return _spawnBlockSpecifiedPosition.apply(this, arguments);
          }
          return spawnBlockSpecifiedPosition;
        }();
        _proto.spawnNewRow = /*#__PURE__*/function () {
          var _spawnNewRow = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
            var moveMap;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return this.gridManager.shiftRowsUpAndSpawnNewRow();
                case 2:
                  moveMap = _context5.sent;
                  _context5.next = 5;
                  return this.animateUpwardShift(moveMap);
                case 5:
                  if (!this.gridManager.isOutOfBounds) {
                    _context5.next = 9;
                    break;
                  }
                  console.log("Game Over triggered by outOfBounds row shift");
                  this.onLevelComplete();
                  return _context5.abrupt("return");
                case 9:
                  _context5.next = 11;
                  return this.applyGravityAndProcessMatches();
                case 11:
                  this.scoreManager.initalizeThrows();
                case 12:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this);
          }));
          function spawnNewRow() {
            return _spawnNewRow.apply(this, arguments);
          }
          return spawnNewRow;
        }();
        _proto.animateUpwardShift = /*#__PURE__*/function () {
          var _animateUpwardShift = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(moveMap) {
            var promises, key, _moveMap$key, block, oldRow, newRow, col, startPos, endPos;
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  promises = []; // For each tile that moved
                  for (key in moveMap) {
                    _moveMap$key = moveMap[key], block = _moveMap$key.block, oldRow = _moveMap$key.oldRow, newRow = _moveMap$key.newRow, col = _moveMap$key.col; // The tile was at (oldRow, col), now at (newRow, col)
                    startPos = this.getTilePositionByRowCol(oldRow, col);
                    endPos = this.getTilePositionByRowCol(newRow, col);
                    block.setPosition(startPos); // Make sure it starts at old pos
                    promises.push(this.animationManager.animateTileDrop(block, startPos, endPos, this.dropSpeed));
                  }
                  _context6.next = 4;
                  return Promise.all(promises);
                case 4:
                case "end":
                  return _context6.stop();
              }
            }, _callee6, this);
          }));
          function animateUpwardShift(_x4) {
            return _animateUpwardShift.apply(this, arguments);
          }
          return animateUpwardShift;
        }();
        _proto.getTilePositionByRowCol = function getTilePositionByRowCol(row, col) {
          return this.gridManager.getTilePosition(row, col);
        };
        _createClass(GameBoardManager, [{
          key: "ChooseSkillEvent",
          get: function get() {
            return this.levelCompleteEvent;
          }
        }]);
        return GameBoardManager;
      }(Component), _class3.Instance = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "blockPrefab", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "gridSize", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 4;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "tileSpacing", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "tileSpacingY", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "gameBoard", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "targetPositionBottomRow", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "targetPositionLeftMostCol", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "upcomingTileNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "playBtn", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "tileItemSize", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec2(113, 117);
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "scoreManager", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "dropSpeed", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1000;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "tileSprites", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameConstants.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "62244ErrxhM7KBL7Skfhm6D", "GameConstants", undefined);
      var SCREEN_WIDTH = exports('SCREEN_WIDTH', 510);
      var SCREEN_HEIGHT = exports('SCREEN_HEIGHT', 680);
      var SCREEN_HALF_WIDTH = exports('SCREEN_HALF_WIDTH', SCREEN_WIDTH / 2);
      var SCREEN_HALF_HEIGHT = exports('SCREEN_HALF_HEIGHT', SCREEN_HEIGHT / 2);
      var LevelData = exports('LevelData', function LevelData() {});
      LevelData.Turns = [];
      var EnMechanicType = exports('EnMechanicType', /*#__PURE__*/function (EnMechanicType) {
        EnMechanicType[EnMechanicType["HighEnder"] = 0] = "HighEnder";
        EnMechanicType[EnMechanicType["Ice"] = 1] = "Ice";
        EnMechanicType[EnMechanicType["Brick"] = 2] = "Brick";
        return EnMechanicType;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameModalLauncher.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Game.ts', './GameModalWindowTypes.ts', './LevelCompleteModalWindow.ts'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, cclegacy, Game, GameModalWindowTypes, LevelCompleteModalWindow;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      Game = module.Game;
    }, function (module) {
      GameModalWindowTypes = module.GameModalWindowTypes;
    }, function (module) {
      LevelCompleteModalWindow = module.LevelCompleteModalWindow;
    }],
    execute: function () {
      cclegacy._RF.push({}, "19da7miMLJNc4P7s+8XveTX", "GameModalLauncher", undefined);
      var GameModalLauncher = exports('GameModalLauncher', /*#__PURE__*/function () {
        function GameModalLauncher(modalWindowManager, gamePauser, upgrader, translationData) {
          this.modalWindowManager = modalWindowManager;
          this.gamePauser = gamePauser;
          this.upgrader = upgrader;
          this.translationData = translationData;
        }
        var _proto = GameModalLauncher.prototype;
        _proto.showPauseModal = /*#__PURE__*/function () {
          var _showPauseModal = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var shouldExit;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  this.gamePauser.pause();
                  _context.next = 3;
                  return this.modalWindowManager.showModal(GameModalWindowTypes.Pause, this.modalWindowManager);
                case 3:
                  shouldExit = _context.sent;
                  if (shouldExit) {
                    Game.Instance.exitGame();
                  } else {
                    Game.Instance.resumeGame();
                  }
                case 5:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function showPauseModal() {
            return _showPauseModal.apply(this, arguments);
          }
          return showPauseModal;
        }();
        _proto.showLevelCompletePopup = /*#__PURE__*/function () {
          var _showLevelCompletePopup = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(levelCompleteData) {
            var shouldExit;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  this.gamePauser.pause();
                  _context2.next = 3;
                  return this.modalWindowManager.showPopup(LevelCompleteModalWindow, GameModalWindowTypes.LevelComplete, this.modalWindowManager, levelCompleteData);
                case 3:
                  shouldExit = _context2.sent;
                  if (shouldExit) {
                    Game.Instance.exitGame();
                  } else {
                    this.gamePauser.resume();
                    Game.Instance.resumeGame();
                  }
                case 5:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function showLevelCompletePopup(_x) {
            return _showLevelCompletePopup.apply(this, arguments);
          }
          return showLevelCompletePopup;
        }();
        return GameModalLauncher;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameModalWindowTypes.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "72fb4NJe3NB4a16TVCrz8H6", "GameModalWindowTypes", undefined);
      var GameModalWindowTypes = exports('GameModalWindowTypes', /*#__PURE__*/function (GameModalWindowTypes) {
        GameModalWindowTypes["LevelUp"] = "LevelUpModalWindow";
        GameModalWindowTypes["Chest"] = "ChestModalWindow";
        GameModalWindowTypes["Pause"] = "PauseModalWindow";
        GameModalWindowTypes["LevelComplete"] = "PfLevelComplete";
        return GameModalWindowTypes;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameModels.ts", ['cc'], function (exports) {
  var cclegacy, Vec3;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ae8f2eelOFL9ZuSj14wdVRM", "GameModels", undefined);
      var PositionData = exports('PositionData', function PositionData(leftBottomPos, tileWidth, tileHeight, tileSpacing, tileSpacingY) {
        this.leftBottomPos = Vec3.ZERO;
        this.tileWidth = 113;
        this.tileHeight = 117;
        this.tileSpacing = 10;
        this.tileSpacingY = 5;
        this.leftBottomPos = leftBottomPos;
        this.tileHeight = tileHeight;
        this.tileWidth = tileWidth;
        this.tileSpacing = tileSpacing;
        this.tileSpacingY = tileSpacingY;
      });
      var MatchResultData = exports('MatchResultData', /*#__PURE__*/function () {
        function MatchResultData(sum, isMatch, matchedBlocks) {
          this.sum = 0;
          this.isMatch = false;
          this.matchedBlocks = [];
          this.sum = sum;
          this.isMatch = isMatch;
          this.matchedBlocks = matchedBlocks;
        }
        var _proto = MatchResultData.prototype;
        _proto.set = function set(sum, isMatch, matchedBlocks) {
          this.sum = sum;
          this.isMatch = isMatch;
          this.matchedBlocks = matchedBlocks;
        };
        return MatchResultData;
      }());
      var SpriteTypes = exports('SpriteTypes', /*#__PURE__*/function (SpriteTypes) {
        SpriteTypes["Nine"] = "NINE";
        SpriteTypes["Eight"] = "EIGHT";
        SpriteTypes["Seven"] = "SEVEN";
        SpriteTypes["Six"] = "SIX";
        SpriteTypes["Five"] = "FIVE";
        SpriteTypes["Four"] = "FOUR";
        SpriteTypes["Three"] = "THREE";
        SpriteTypes["Two"] = "TWO";
        SpriteTypes["One"] = "ONE";
        SpriteTypes["ICE"] = "ICE";
        SpriteTypes["IceCracked"] = "ICE_CRACKED";
        SpriteTypes["Blocker"] = "BLOCKER";
        return SpriteTypes;
      }({}));
      var ItemType = exports('ItemType', /*#__PURE__*/function (ItemType) {
        ItemType[ItemType["Coin"] = 0] = "Coin";
        return ItemType;
      }({}));
      var EnGameType = exports('EnGameType', /*#__PURE__*/function (EnGameType) {
        EnGameType["SOLO"] = "SOLO";
        EnGameType["PUZZLE"] = "PUZZLE";
        return EnGameType;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameRunner.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AppRoot.ts', './Game.ts', './AsyncUtils.ts'], function (exports) {
  var _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, director, AppRoot, Game, delay;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      director = module.director;
    }, function (module) {
      AppRoot = module.AppRoot;
    }, function (module) {
      Game = module.Game;
    }, function (module) {
      delay = module.delay;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "c3869g4LTpKIqL0d9EagibV", "GameRunner", undefined);
      var GameRunner = exports('GameRunner', /*#__PURE__*/function () {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        function GameRunner() {
          this.isRunning = false;
        }
        var _proto = GameRunner.prototype;
        _proto.playGame = /*#__PURE__*/function () {
          var _playGame = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var userData, result;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  this.isRunning = true;
                  director.loadScene("Game");
                  userData = AppRoot.Instance.LiveUserData;
                case 3:
                  if (!(Game.Instance == null)) {
                    _context.next = 8;
                    break;
                  }
                  _context.next = 6;
                  return delay(10);
                case 6:
                  _context.next = 3;
                  break;
                case 8:
                  _context.next = 10;
                  return Game.Instance.play(userData, AppRoot.Instance.Settings, AppRoot.Instance.TranslationData);
                case 10:
                  result = _context.sent;
                  userData.game.goldCoins += result.goldCoins;
                  if (userData.game.highscore < result.sessionData.score) {
                    userData.game.highscore = result.sessionData.score;
                  }
                  if (userData.game.maxLevelReached < result.sessionData.levelReached) {
                    userData.game.maxLevelReached = result.sessionData.levelReached;
                  }
                  AppRoot.Instance.saveUserData();
                  director.loadScene("Menu");
                  this.isRunning = false;
                case 17:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function playGame() {
            return _playGame.apply(this, arguments);
          }
          return playGame;
        }();
        _createClass(GameRunner, [{
          key: "IsRunning",
          get: function get() {
            return this.isRunning;
          }
        }], [{
          key: "Instance",
          get: function get() {
            return this.instance;
          }
        }]);
        return GameRunner;
      }());
      _class = GameRunner;
      GameRunner.instance = new _class();
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameSettings.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5f9b9/asvpMk6Mohpkji98J", "GameSettings", undefined);
      var GameSettings = exports('GameSettings', function GameSettings() {
        this.player = new PlayerSettings();
        this.upgrades = new UpgradeSettings();
        this.metaUpgrades = new MetaUpgradesSettings();
        this.enemyManager = new EnemyManagerSettings();
        this.items = new ItemSettings();
      });
      var PlayerSettings = exports('PlayerSettings', function PlayerSettings() {
        this.defaultHP = 0;
        this.requiredXP = [];
        this.speed = 0;
        this.regenerationDelay = 0;
        this.collisionDelay = 0;
        this.magnetDuration = 0;
        this.weapon = new WeaponSettings();
        this.haloLauncher = new HaloLauncherSettings();
        this.horizontalLauncher = new WaveLauncherSettings();
        this.diagonalLauncher = new WaveLauncherSettings();
      });
      var WeaponSettings = exports('WeaponSettings', function WeaponSettings() {
        this.strikeDelay = 0;
        this.damage = 0;
      });
      var WaveLauncherSettings = exports('WaveLauncherSettings', function WaveLauncherSettings() {
        this.wavesToShootPerUpgrade = 0;
        this.launcher = new ProjectileLauncherSettings();
      });
      var HaloLauncherSettings = exports('HaloLauncherSettings', function HaloLauncherSettings() {
        this.projectilesToSpawn = 0;
        this.cooldownDivisorPerUpgrade = 0;
        this.launcher = new ProjectileLauncherSettings();
      });
      var EnemyLauncherSettings = exports('EnemyLauncherSettings', function EnemyLauncherSettings() {
        this.enemyIds = [];
        this.projectileLifetime = 0;
        this.projectileSpeed = 0;
        this.projectileDamage = 0;
        this.cooldown = 0;
      });
      var ProjectileLauncherSettings = exports('ProjectileLauncherSettings', function ProjectileLauncherSettings() {
        this.projectileLifetime = 0;
        this.projectileSpeed = 0;
        this.wavesToShoot = 0;
        this.wavesDelayMs = 0;
        this.cooldown = 0;
      });
      var UpgradeSettings = exports('UpgradeSettings', function UpgradeSettings() {
        this.maxWeaponLengthUpgrades = 0;
        this.maxWeaponDamageUpgrades = 0;
        this.maxHorizontalProjectileUpgrades = 0;
        this.maxDiagonalProjectileUpgrades = 0;
        this.maxHaloProjectileUpgrades = 0;
        this.maxRegenerationUpgrades = 0;
      });
      var MetaUpgradesSettings = exports('MetaUpgradesSettings', function MetaUpgradesSettings() {
        this.health = new MetaUpgradeSettings();
        this.overallDamage = new MetaUpgradeSettings();
        this.projectilePiercing = new MetaUpgradeSettings();
        this.movementSpeed = new MetaUpgradeSettings();
        this.xpGatherer = new MetaUpgradeSettings();
        this.goldGatherer = new MetaUpgradeSettings();
      });
      var MetaUpgradeSettings = exports('MetaUpgradeSettings', function MetaUpgradeSettings() {
        this.costs = [];
        this.bonuses = [];
      });
      var EnemyManagerSettings = exports('EnemyManagerSettings', function EnemyManagerSettings() {
        this.axeLauncher = new EnemyLauncherSettings();
        this.magicOrbLauncher = new EnemyLauncherSettings();
        this.enemies = [new EnemySettings()];
        this.periodicFollowMovers = [new PeriodicFollowMoverSettings()];
        this.individualEnemySpawners = [new IndividualEnemySpawnerSettings()];
        this.circularEnemySpawners = [new CircularEnemySpawnerSettings()];
        this.waveEnemySpawners = [new WaveEnemySpawnerSettings()];
      });
      var PeriodicFollowMoverSettings = exports('PeriodicFollowMoverSettings', function PeriodicFollowMoverSettings() {
        this.enemyIdToAffect = "";
        this.followTime = 0;
        this.waitTime = 0;
      });
      var GeneralEnemySpawnerSettings = exports('GeneralEnemySpawnerSettings', function GeneralEnemySpawnerSettings() {
        this.enemyId = "";
        this.startDelay = 0;
        this.stopDelay = 0;
        this.cooldown = 0;
      });
      var WaveEnemySpawnerSettings = exports('WaveEnemySpawnerSettings', function WaveEnemySpawnerSettings() {
        this.common = new GeneralEnemySpawnerSettings();
        this.enemiesToSpawn = 0;
      });
      var CircularEnemySpawnerSettings = exports('CircularEnemySpawnerSettings', function CircularEnemySpawnerSettings() {
        this.common = new GeneralEnemySpawnerSettings();
        this.enemiesToSpawn = 0;
      });
      var IndividualEnemySpawnerSettings = exports('IndividualEnemySpawnerSettings', function IndividualEnemySpawnerSettings() {
        this.common = new GeneralEnemySpawnerSettings();
      });
      var EnemySettings = exports('EnemySettings', function EnemySettings() {
        this.id = "";
        this.moveType = "";
        this.graphicsType = "";
        this.health = 0;
        this.damage = 0;
        this.speed = 0;
        this.lifetime = 0;
        this.xpReward = 0;
        this.goldReward = 0;
        this.healthPotionRewardChance = 0;
        this.magnetRewardChance = 0;
        this.chestRewardChance = 0;
      });
      var ItemSettings = exports('ItemSettings', function ItemSettings() {
        this.healthPerPotion = 0;
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameTimer.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "93024LYFAZP4J3Xa3AOz/Rx", "GameTimer", undefined);
      var GameTimer = exports('GameTimer', /*#__PURE__*/function () {
        function GameTimer(targetDelay) {
          this.targetDelay = void 0;
          this.currentDelay = 0;
          this.targetDelay = targetDelay;
        }
        var _proto = GameTimer.prototype;
        _proto.gameTick = function gameTick(deltaTime) {
          this.currentDelay += deltaTime;
        };
        _proto.tryFinishPeriod = function tryFinishPeriod() {
          if (this.targetDelay <= this.currentDelay) {
            this.currentDelay = 0;
            return true;
          } else {
            return false;
          }
        };
        return GameTimer;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UIButton.ts', './GameModels.ts', './ConsoleLogger.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, ProgressBar, Label, Component, UIButton, ItemType, ConsoleLogger;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      ProgressBar = module.ProgressBar;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      UIButton = module.UIButton;
    }, function (module) {
      ItemType = module.ItemType;
    }, function (module) {
      ConsoleLogger = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "2e3934mbwxGZ64mwdThAm0I", "GameUI", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GameUI = exports('GameUI', (_dec = ccclass("GameUI"), _dec2 = property(ProgressBar), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(UIButton), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameUI, _Component);
        function GameUI() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "xpBar", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "timeAliveText", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "goldLabel", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pauseBtn", _descriptor4, _assertThisInitialized(_this));
          _this.playerLevel = void 0;
          _this.modalLauncher = void 0;
          _this.gameResult = void 0;
          return _this;
        }
        var _proto = GameUI.prototype;
        _proto.init = function init(modalLauncher, gameResult, level) {
          var _this$pauseBtn;
          this.modalLauncher = modalLauncher;
          this.gameResult = gameResult;
          this.playerLevel = level;
          this.playerLevel.XpAddedEvent.on(this.updateProgressBar, this);
          this.playerLevel.LevelUpEvent.on(this.updateProgressBar, this);
          (_this$pauseBtn = this.pauseBtn) == null || (_this$pauseBtn = _this$pauseBtn.InteractedEvent) == null || _this$pauseBtn.on(this.showPauseWindow, this);
          this.xpBar.progress = 0;
        };
        _proto.onDisable = function onDisable() {
          var _this$pauseBtn2;
          this.playerLevel.XpAddedEvent.off(this.updateProgressBar);
          this.playerLevel.LevelUpEvent.off(this.updateProgressBar);
          (_this$pauseBtn2 = this.pauseBtn) == null || (_this$pauseBtn2 = _this$pauseBtn2.InteractedEvent) == null || _this$pauseBtn2.off(this.showPauseWindow);
        };
        _proto.updateProgressBar = function updateProgressBar() {
          this.xpBar.progress = this.playerLevel.XP / this.playerLevel.RequiredXP;
        };
        _proto.tryUpdateGoldLabel = function tryUpdateGoldLabel(itemType) {
          if (itemType !== ItemType.Coin) return;
          this.goldLabel.string = this.gameResult.goldCoins.toString();
        };
        _proto.showPauseWindow = function showPauseWindow() {
          console.log("Show pause window");
          this.modalLauncher.showPauseModal();
        };
        _proto.showLevelCompletePopup = function showLevelCompletePopup(levelCompleteData) {
          ConsoleLogger.instance.debug("Show Level complete");
          this.modalLauncher.showLevelCompletePopup(levelCompleteData);
        };
        _proto.updateTimeAlive = function updateTimeAlive(timeAlive) {
          this.timeAliveText.string = "" + Math.floor(timeAlive);
        };
        return GameUI;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "xpBar", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "timeAliveText", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "goldLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "pauseBtn", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GridManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './TileItemUI.ts', './GameConstants.ts'], function (exports) {
  var _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Vec3, TileItemUI, EnMechanicType;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec3 = module.Vec3;
    }, function (module) {
      TileItemUI = module.TileItemUI;
    }, function (module) {
      EnMechanicType = module.EnMechanicType;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "0ca57HFFldI5rvzxAd1hTNf", "GridManager", undefined);
      var ccclass = _decorator.ccclass;
      var GridManager = exports('GridManager', (_dec = ccclass('GridManager'), _dec(_class = /*#__PURE__*/function () {
        function GridManager(gridSize, positionData, spawner) {
          this.grid = void 0;
          this.gridSize = void 0;
          this.positionData = void 0;
          this.spawner = void 0;
          this.isOutOfBounds = false;
          this.gridSize = gridSize;
          this.positionData = positionData;
          this.spawner = spawner;
          this.createGrid();
        }
        var _proto = GridManager.prototype;
        _proto.getGrid = function getGrid() {
          return this.grid;
        };
        _proto.createGrid = function createGrid() {
          this.grid = [];
          for (var i = 0; i < this.gridSize; i++) {
            this.grid[i] = [];
            for (var j = 0; j < this.gridSize; j++) {
              this.grid[i][j] = null;
            }
          }
        };
        _proto.getTilePosition = function getTilePosition(row, col) {
          return new Vec3(this.positionData.leftBottomPos.x + col * (this.positionData.tileWidth + this.positionData.tileSpacing), this.positionData.leftBottomPos.y + row * (this.positionData.tileHeight + this.positionData.tileSpacingY), 0);
        };
        _proto.findBottommostEmptyRow = function findBottommostEmptyRow(col) {
          for (var row = 0; row < this.gridSize; row++) {
            if (!this.grid[row][col]) {
              return row;
            }
          }
          return -1;
        };
        _proto.updateCell = function updateCell(row, col, block) {
          this.grid[row][col] = block;
        };
        _proto.clearCell = function clearCell(row, col) {
          this.grid[row][col] = null;
        };
        _proto.getBlock = function getBlock(row, col) {
          return this.grid[row][col];
        };
        _proto.CheckIfNoEmptyPlaces = function CheckIfNoEmptyPlaces() {
          for (var row = 0; row < this.gridSize; row++) {
            var emptyIdx = this.findBottommostEmptyRow(row);
            if (emptyIdx != -1) {
              return false;
            }
          }
          return true;
        };
        _proto.shiftRowsUpAndSpawnNewRow = /*#__PURE__*/function () {
          var _shiftRowsUpAndSpawnNewRow = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var topRowIndex, topRow, hasBlocks, moveMap, moveIndex, row, col, block, tileItem, oldRow, oldCol, newRow, _col, postion, _block, _tileItem, _oldRow, _oldCol;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  this.isOutOfBounds = false;
                  topRowIndex = this.gridSize - 1;
                  topRow = this.grid[topRowIndex]; // If top row has blocks => game over
                  hasBlocks = topRow.some(function (cell) {
                    return cell !== null;
                  });
                  if (hasBlocks) {
                    this.isOutOfBounds = true;
                    // Return an empty map if game over triggered
                    // return {}; 
                  }

                  // Prepare a map of old->new positions
                  moveMap = {};
                  moveIndex = 0; // Shift each row up
                  for (row = topRowIndex; row > 0; row--) {
                    this.grid[row] = this.grid[row - 1];
                    for (col = 0; col < this.gridSize; col++) {
                      block = this.grid[row][col];
                      if (block) {
                        tileItem = block.getComponent(TileItemUI);
                        oldRow = tileItem.Row;
                        oldCol = tileItem.Col; // Update tile's row
                        tileItem.SetRowCol(row, oldCol);

                        // Record the move for animation
                        moveMap[moveIndex++] = {
                          block: block,
                          oldRow: oldRow,
                          newRow: row,
                          col: oldCol
                        };
                      }
                    }
                  }

                  // Create a new empty row at index 0
                  newRow = this.spawner.spawnNewRow(EnMechanicType.HighEnder, this.gridSize - 1);
                  for (_col = 0; _col < this.gridSize; _col++) {
                    postion = new Vec3(newRow[_col].position.x, newRow[_col].position.y, newRow[_col].position.z);
                    postion = new Vec3(postion.x, postion.y - (this.positionData.tileHeight + this.positionData.tileSpacingY), postion.z);
                    _block = newRow[_col];
                    _tileItem = _block.getComponent(TileItemUI);
                    _oldRow = -1;
                    _oldCol = _tileItem.Col;
                    newRow[_col].setPosition(postion);
                    moveMap[moveIndex++] = {
                      block: _block,
                      oldRow: _oldRow,
                      newRow: _tileItem.Row,
                      col: _oldCol
                    };
                  }
                  this.grid[0] = newRow;

                  // Return the map so caller can animate
                  return _context.abrupt("return", moveMap);
                case 12:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function shiftRowsUpAndSpawnNewRow() {
            return _shiftRowsUpAndSpawnNewRow.apply(this, arguments);
          }
          return shiftRowsUpAndSpawnNewRow;
        }();
        _createClass(GridManager, [{
          key: "RowLen",
          get: function get() {
            return this.grid.length;
          }
        }, {
          key: "ColLen",
          get: function get() {
            return this.grid[0].length;
          }
        }]);
        return GridManager;
      }()) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GroupType.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "99f17nqqu1OVZ5ltNXkX8mX", "GroupType", undefined);
      // Flags, shift must match index in ProjectSettings > Physics

      var GroupType = exports('GroupType', /*#__PURE__*/function (GroupType) {
        GroupType[GroupType["DEFAULT"] = 1] = "DEFAULT";
        GroupType[GroupType["PLAYER"] = 2] = "PLAYER";
        GroupType[GroupType["ENEMY"] = 4] = "ENEMY";
        GroupType[GroupType["WEAPON"] = 8] = "WEAPON";
        GroupType[GroupType["ITEM"] = 16] = "ITEM";
        GroupType[GroupType["PLAYER_PROJECTILE"] = 32] = "PLAYER_PROJECTILE";
        GroupType[GroupType["ENEMY_PROJECTILE"] = 64] = "ENEMY_PROJECTILE";
        GroupType[GroupType["MAGNET_RANGE"] = 128] = "MAGNET_RANGE";
        return GroupType;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IInput.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b82abZ+1yBP662pB7ZwSiuI", "IInput", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/InputHandler.ts", ['cc'], function (exports) {
  var cclegacy, _decorator, view;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      view = module.view;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "01806AhrqZPjrtODynaKKLz", "InputHandler", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var InputHandler = exports('default', ccclass(_class = /*#__PURE__*/function () {
        function InputHandler(gridSize, gridTouchNode, onColumnSelected) {
          this.gridSize = void 0;
          this.onColumnSelected = void 0;
          this.gridTouchNode = void 0;
          this.gridSize = gridSize;
          this.onColumnSelected = onColumnSelected;
          this.gridTouchNode = gridTouchNode;
          this.registerInput();
        }
        var _proto = InputHandler.prototype;
        _proto.registerInput = function registerInput() {
          // this.gridTouchNode.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
        };
        _proto.onTouchStart = function onTouchStart(event) {
          var touchPos = event.getLocation();
          var column = Math.floor(touchPos.x / (view.getVisibleSize().width / this.gridSize));
          this.onColumnSelected(column);
        };
        return InputHandler;
      }()) || _class);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ISignal.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "804a4PjX8hFmpusgUCG4lfo", "ISignal", undefined);
      /* eslint-disable @typescript-eslint/no-explicit-any */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/KeyboardInput.ts", ['cc'], function (exports) {
  var cclegacy, Vec2;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Vec2 = module.Vec2;
    }],
    execute: function () {
      cclegacy._RF.push({}, "14d49iLCLxKDpfnsGt4saGA", "KeyboardInput", undefined);
      var KeyboardInput = exports('KeyboardInput', /*#__PURE__*/function () {
        function KeyboardInput(up, down, left, right) {
          this.xAxis = 0;
          this.yAxis = 0;
          this.up = void 0;
          this.down = void 0;
          this.left = void 0;
          this.right = void 0;
          this.up = up;
          this.down = down;
          this.left = left;
          this.right = right;

          // input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          // input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
        }

        var _proto = KeyboardInput.prototype;
        _proto.getAxis = function getAxis() {
          return new Vec2(this.xAxis, this.yAxis).normalize();
        };
        _proto.onKeyDown = function onKeyDown(event) {
          switch (event.keyCode) {
            case this.up:
              this.yAxis = 1;
              break;
            case this.down:
              this.yAxis = -1;
              break;
            case this.left:
              this.xAxis = -1;
              break;
            case this.right:
              this.xAxis = 1;
              break;
          }
        };
        _proto.onKeyUp = function onKeyUp(event) {
          switch (event.keyCode) {
            case this.up:
              this.yAxis = this.yAxis === 1 ? 0 : this.yAxis;
              break;
            case this.down:
              this.yAxis = this.yAxis === -1 ? 0 : this.yAxis;
              break;
            case this.left:
              this.xAxis = this.xAxis === -1 ? 0 : this.xAxis;
              break;
            case this.right:
              this.xAxis = this.xAxis === 1 ? 0 : this.xAxis;
              break;
          }
        };
        return KeyboardInput;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LevelCompleteModalWindow.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ModalWindow.ts', './UIButton.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, ModalWindow, UIButton;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Node = module.Node;
    }, function (module) {
      ModalWindow = module.ModalWindow;
    }, function (module) {
      UIButton = module.UIButton;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "e454faom/FI4YRvlWq4VfvV", "LevelCompleteModalWindow", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LevelCompleteModalWindow = exports('LevelCompleteModalWindow', (_dec = ccclass("LevelCompleteModalWindow"), _dec2 = property(UIButton), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_ModalWindow) {
        _inheritsLoose(LevelCompleteModalWindow, _ModalWindow);
        function LevelCompleteModalWindow() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ModalWindow.call.apply(_ModalWindow, [this].concat(args)) || this;
          //#region UI Buttons
          _initializerDefineProperty(_this, "continueBtn", _descriptor, _assertThisInitialized(_this));
          //#endregion
          //#region UI Labels
          _initializerDefineProperty(_this, "gameTypeLabel", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scoreLabel", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "highScoreLabel", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "averageScoreLabel", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sequenceLabel", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "levelReachedLabel", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "blocksDroppedLabel", _descriptor8, _assertThisInitialized(_this));
          //#endregion
          _initializerDefineProperty(_this, "gameOverPanel", _descriptor9, _assertThisInitialized(_this));
          _this.modalWindowManager = void 0;
          return _this;
        }
        var _proto = LevelCompleteModalWindow.prototype;
        _proto.setup = function setup(modalWindowManager, data) {
          this.modalWindowManager = modalWindowManager;
          this.gameTypeLabel.string = data.gameType;
          this.scoreLabel.string = "" + data.score;
          this.highScoreLabel.string = "" + data.highScore;
          this.averageScoreLabel.string = "" + data.averageScore;
          this.sequenceLabel.string = "" + data.sequence;
          this.levelReachedLabel.string = "" + data.levelReached;
          this.blocksDroppedLabel.string = "" + data.blocksDropped;
          this.continueBtn.InteractedEvent.on(this.continueGame, this);
          this.closeButton.InteractedEvent.on(this.closeGame, this);
        };
        _proto.openSettingsWindow = function openSettingsWindow() {};
        _proto.continueGame = function continueGame() {
          this.dismiss(false);
        };
        _proto.closeGame = function closeGame() {
          this.dismiss(true);
        };
        _proto.onDisable = function onDisable() {
          this.continueBtn.InteractedEvent.off(this.continueGame);
          this.closeButton.InteractedEvent.off(this.closeGame);
        };
        return LevelCompleteModalWindow;
      }(ModalWindow), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "continueBtn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "gameTypeLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "scoreLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "highScoreLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "averageScoreLabel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "sequenceLabel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "levelReachedLabel", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "blocksDroppedLabel", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "gameOverPanel", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LevelUpModalWindow.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ModalWindow.ts', './ArrayUtils.ts', './AsyncUtils.ts', './LevelUpSkill.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Prefab, Node, instantiate, Vec3, ModalWindow, shuffle, delay, LevelUpSkill;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Node = module.Node;
      instantiate = module.instantiate;
      Vec3 = module.Vec3;
    }, function (module) {
      ModalWindow = module.ModalWindow;
    }, function (module) {
      shuffle = module.shuffle;
    }, function (module) {
      delay = module.delay;
    }, function (module) {
      LevelUpSkill = module.LevelUpSkill;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "f7ac68qK+pC7LXQWJdgAYVs", "LevelUpModalWindow", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LevelUpModalWindow = exports('LevelUpModalWindow', (_dec = ccclass("LevelUpModalWindow"), _dec2 = property(Prefab), _dec3 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_ModalWindow) {
        _inheritsLoose(LevelUpModalWindow, _ModalWindow);
        function LevelUpModalWindow() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ModalWindow.call.apply(_ModalWindow, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "skillPrefab", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "skillParent", _descriptor2, _assertThisInitialized(_this));
          _this.maxUpgradesToPick = 3;
          return _this;
        }
        var _proto = LevelUpModalWindow.prototype;
        _proto.setup = /*#__PURE__*/function () {
          var _setup = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(params) {
            var shuffledAvailableUpgrades, xPositions, i, skill;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  shuffledAvailableUpgrades = shuffle(params.availableUpgrades);
                  if (this.maxUpgradesToPick < shuffledAvailableUpgrades.length) {
                    shuffledAvailableUpgrades.length = this.maxUpgradesToPick;
                  }
                  xPositions = [-172, 0, 172];
                  _context.next = 5;
                  return delay(300);
                case 5:
                  i = 0;
                case 6:
                  if (!(i < shuffledAvailableUpgrades.length)) {
                    _context.next = 16;
                    break;
                  }
                  _context.next = 9;
                  return delay(500);
                case 9:
                  skill = instantiate(this.skillPrefab).getComponent(LevelUpSkill);
                  skill.node.setParent(this.skillParent);
                  skill.node.setPosition(new Vec3(xPositions[i]));
                  skill.init(shuffledAvailableUpgrades[i], params.translationData);
                // skill.ChooseSkillEvent.on(this.chooseSkill, this);
                case 13:
                  i++;
                  _context.next = 6;
                  break;
                case 16:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function setup(_x) {
            return _setup.apply(this, arguments);
          }
          return setup;
        }();
        _proto.chooseSkill = function chooseSkill(upgradeType) {
          this.dismiss(upgradeType);
        };
        return LevelUpModalWindow;
      }(ModalWindow), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "skillPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "skillParent", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      var LevelUpModalWindowParams = exports('LevelUpModalWindowParams', function LevelUpModalWindowParams() {
        this.availableUpgrades = void 0;
        this.translationData = void 0;
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LevelUpSkill.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AppRoot.ts', './Signal.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Label, Sprite, Component, AppRoot, Signal;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Sprite = module.Sprite;
      Component = module.Component;
    }, function (module) {
      AppRoot = module.AppRoot;
    }, function (module) {
      Signal = module.Signal;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "65e26iJvE9IfYYlYC+87Y6x", "LevelUpSkill", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LevelUpSkill = exports('LevelUpSkill', (_dec = ccclass("LevelUpSkill"), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Sprite), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LevelUpSkill, _Component);
        function LevelUpSkill() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "skillTitle", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "skillDescription", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "skillIcon", _descriptor3, _assertThisInitialized(_this));
          _this.chooseSkillEvent = new Signal();
          _this.skillType = void 0;
          return _this;
        }
        var _proto = LevelUpSkill.prototype;
        _proto.init = function init(skillType, translationData) {
          this.skillType = skillType;
          this.skillTitle.string = "" + translationData[skillType + "_TITLE"];
          this.skillDescription.string = "" + translationData[skillType + "_DESC"];
          this.skillIcon.spriteFrame = AppRoot.Instance.GameAssets.UpgradeIcons.getIcon(skillType);
          // this.node.on(NodeEventType.TOUCH_START, this.chooseSkill, this);
        };

        _proto.chooseSkill = function chooseSkill() {
          this.chooseSkillEvent.trigger(this.skillType);
        };
        _createClass(LevelUpSkill, [{
          key: "ChooseSkillEvent",
          get: function get() {
            return this.chooseSkillEvent;
          }
        }]);
        return LevelUpSkill;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "skillTitle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "skillDescription", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "skillIcon", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./AppRoot.ts', './AppRootUtils.ts', './SaveSystem.ts', './GameAudioAdapter.ts', './AudioAssets.ts', './GameAssets.ts', './MetaUpgradeIcons.ts', './UpgradeIcons.ts', './GameConstants.ts', './GameSettings.ts', './TurnManager.ts', './TranslationData.ts', './UserData.ts', './Game.ts', './GroupType.ts', './IInput.ts', './KeyboardInput.ts', './MultiInput.ts', './VirtualJoystic.ts', './PickupEffect.ts', './PickupEffectManager.ts', './ChestModalWindow.ts', './GameModalLauncher.ts', './GameModalWindowTypes.ts', './LevelCompleteModalWindow.ts', './PauseModalWindow.ts', './Pauser.ts', './TestGameRunner.ts', './GameUI.ts', './LevelUpModalWindow.ts', './LevelUpSkill.ts', './UnitHealth.ts', './UnitLevel.ts', './GameBoardManager.ts', './BlockSpawner.ts', './GridManager.ts', './InputHandler.ts', './MatchChecker.ts', './MatchManager.ts', './NumberGenerator.ts', './TileAnimationManager.ts', './UIManager.ts', './ScoreManager.ts', './SerialisedAssets.ts', './TileItemUI.ts', './GameModels.ts', './GameRunner.ts', './Menu.ts', './AudioSettingsModalWindow.ts', './MenuModalLauncher.ts', './MenuModalWindowTypes.ts', './UpgradeLevelPointUI.ts', './UpgradeUI.ts', './UpgradesModalWindow.ts', './AssetManagerWrapper.ts', './AudioPlayer.ts', './ConsoleLogger.ts', './ISignal.ts', './Signal.ts', './GameTimer.ts', './ModalWindow.ts', './ModalWindowManager.ts', './ObjectPool.ts', './RuntimeAssetKeeper.ts', './TweenAnimations.ts', './UIButton.ts', './ArrayUtils.ts', './AsyncUtils.ts', './MathUtils.ts', './StringUtils.ts', './VecUtils.ts', './UpgradeType.ts', './Upgrader.ts', './OpenCloseAnimator.ts', './UIButtonAudioPlayer.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/MatchChecker.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Signal.ts', './TileItemUI.ts', './GameModels.ts'], function (exports) {
  var _createClass, _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, cclegacy, _decorator, Signal, TileItemUI, MatchResultData;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      Signal = module.Signal;
    }, function (module) {
      TileItemUI = module.TileItemUI;
    }, function (module) {
      MatchResultData = module.MatchResultData;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "42323htlf9K0Jl18bP/rHmD", "MatchChecker", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var MatchChecker = exports('default', ccclass(_class = /*#__PURE__*/function () {
        function MatchChecker(grid, scoreManager, positionData) {
          this.onTileMerged = new Signal();
          this.scoreManager = void 0;
          this.positionData = void 0;
          this.grid = void 0;
          this.grid = grid;
          this.scoreManager = scoreManager;
          this.positionData = positionData;
        }
        var _proto = MatchChecker.prototype;
        _proto.checkMatches = /*#__PURE__*/function () {
          var _checkMatches = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var matches;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  matches = this.collectAllMatches();
                  if (!(matches.length > 0)) {
                    _context.next = 5;
                    break;
                  }
                  _context.next = 4;
                  return this.processMatches(matches);
                case 4:
                  return _context.abrupt("return", true);
                case 5:
                  return _context.abrupt("return", false);
                case 6:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function checkMatches() {
            return _checkMatches.apply(this, arguments);
          }
          return checkMatches;
        }();
        _proto.collectAllMatches = function collectAllMatches() {
          var allMatches = [];
          var rowLen = this.grid.RowLen;
          var colLen = this.grid.ColLen;
          for (var row = 0; row < rowLen; row++) {
            var rowMatches = this.findMatchesInRow(row);
            if (rowMatches.length > 0) {
              allMatches.push.apply(allMatches, rowMatches);
            }
          }
          for (var _row = 0; _row < rowLen; _row++) {
            var _rowMatches = this.findMatchesInRowDeeply(_row);
            if (_rowMatches.length > 0) {
              allMatches.push.apply(allMatches, _rowMatches);
            }
          }
          for (var col = 0; col < colLen; col++) {
            var colMatches = this.findMatchesInColumn(col);
            if (colMatches.length > 0) {
              allMatches.push.apply(allMatches, colMatches);
            }
          }
          for (var _col = 0; _col < colLen; _col++) {
            var _colMatches = this.findMatchesInColumnDeeply(_col);
            if (_colMatches.length > 0) {
              allMatches.push.apply(allMatches, _colMatches);
            }
          }
          return allMatches;
        };
        _proto.findMatchesInRowDeeply = function findMatchesInRowDeeply(row) {
          var matches = [];
          var start = 0,
            sum = 0;
          var matchedBlocks = [];
          for (var end = 0; end < this.grid.RowLen; end++) {
            var block = this.grid.getBlock(row, end);
            if (!block) {
              sum = 0;
              matchedBlocks = [];
              start = end + 1;
              continue;
            }
            var tileItem = block.getComponent(TileItemUI);
            sum += tileItem.TileNum;
            matchedBlocks.push(block);
            while (sum > 10 && start <= end) {
              var removeTile = this.grid.getBlock(row, start);
              if (removeTile == null) {
                break;
              }
              sum -= removeTile.getComponent(TileItemUI).TileNum;
              matchedBlocks.shift();
              start++;
            }
            if (sum === 10) {
              this.DisplayScoreToolTip(matchedBlocks);
              matches.push([].concat(matchedBlocks));
            }
          }
          return matches;
        };
        _proto.findMatchesInColumnDeeply = function findMatchesInColumnDeeply(col) {
          var matches = [];
          var start = 0,
            sum = 0;
          var matchedBlocks = [];
          for (var end = 0; end < this.grid.RowLen; end++) {
            var block = this.grid.getBlock(end, col);
            if (!block) {
              sum = 0;
              matchedBlocks = [];
              start = end + 1;
              continue;
            }
            var tileItem = block.getComponent(TileItemUI);
            sum += tileItem.TileNum;
            matchedBlocks.push(block);
            while (sum > 10 && start <= end) {
              var removeTile = this.grid.getBlock(start, col);
              if (removeTile == null) {
                break;
              }
              sum -= removeTile.getComponent(TileItemUI).TileNum;
              matchedBlocks.shift();
              start++;
            }
            if (sum === 10) {
              this.DisplayScoreToolTip(matchedBlocks);
              matches.push([].concat(matchedBlocks));
            }
          }
          return matches;
        };
        _proto.processMatches = /*#__PURE__*/function () {
          var _processMatches = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(allMatches) {
            var destroyAnimations, _iterator, _step, matchGroup, _iterator2, _step2, block, tileItem;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  destroyAnimations = []; // Destroy all matched blocks
                  for (_iterator = _createForOfIteratorHelperLoose(allMatches); !(_step = _iterator()).done;) {
                    matchGroup = _step.value;
                    for (_iterator2 = _createForOfIteratorHelperLoose(matchGroup); !(_step2 = _iterator2()).done;) {
                      block = _step2.value;
                      tileItem = block.getComponent(TileItemUI);
                      destroyAnimations.push(tileItem.destroyTile());
                      this.grid.clearCell(tileItem.Row, tileItem.Col);
                      this.scoreManager.showScoreTooltip(block, 5);
                    }
                  }
                  _context2.next = 4;
                  return Promise.all(destroyAnimations);
                case 4:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function processMatches(_x) {
            return _processMatches.apply(this, arguments);
          }
          return processMatches;
        }();
        _proto.findMatchesInRow = function findMatchesInRow(row) {
          var matches = [];
          var matchData = new MatchResultData(0, false, []);
          for (var col = 0; col < this.grid.ColLen; col++) {
            matchData = this.checkForMatch(row, col, matchData);
            if (matchData.isMatch) {
              matches.push([].concat(matchData.matchedBlocks));
              this.DisplayScoreToolTip(matchData.matchedBlocks);
              matchData = new MatchResultData(0, false, []);
            }
          }
          return matches;
        };
        _proto.findMatchesInColumn = function findMatchesInColumn(col) {
          var matches = [];
          var matchData = new MatchResultData(0, false, []);
          for (var row = this.grid.RowLen - 1; row >= 0; row--) {
            matchData = this.checkForMatch(row, col, matchData);
            if (matchData.isMatch) {
              this.DisplayScoreToolTip(matchData.matchedBlocks);
              matches.push([].concat(matchData.matchedBlocks));
              matchData.set(0, false, []);
            }
          }
          return matches;
        };
        _proto.checkForMatch = function checkForMatch(row, col, matchResultData) {
          var block = this.grid.getBlock(row, col);
          if (!block) {
            matchResultData.set(0, false, []);
            return matchResultData;
          }
          var tileItem = block.getComponent(TileItemUI);
          var number = tileItem.TileNum;
          matchResultData.sum += number;
          matchResultData.matchedBlocks.push(block);
          if (matchResultData.sum === 10) {
            matchResultData.isMatch = true;
          } else if (matchResultData.matchedBlocks.length > 1 && number === matchResultData.matchedBlocks[matchResultData.matchedBlocks.length - 2].getComponent(TileItemUI).TileNum) {
            matchResultData.matchedBlocks = matchResultData.matchedBlocks.slice(-2);
            matchResultData.isMatch = true;
          }
          return matchResultData;
        };
        _proto.DisplayScoreToolTip = function DisplayScoreToolTip(blocks) {
          var scoreToAdd = blocks.length * 5;
          for (var i = 0; i < blocks.length; i++) {
            var block = blocks[i];
            var tileItem = block.getComponent(TileItemUI);
            this.grid.clearCell(tileItem.Row, tileItem.Col);
            // Show tooltip for score popup
            this.scoreManager.showScoreTooltip(block, 5);
          }
          this.scoreManager.addScore(scoreToAdd);
        };
        _createClass(MatchChecker, [{
          key: "OnTileMerged",
          get: function get() {
            return this.onTileMerged;
          }
        }]);
        return MatchChecker;
      }()) || _class);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MatchManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './TileItemUI.ts'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, cclegacy, _decorator, TileItemUI;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      TileItemUI = module.TileItemUI;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "091a6HHcT1GOIKA5338YzSI", "MatchManager", undefined);
      var ccclass = _decorator.ccclass;
      var MatchManager = exports('MatchManager', (_dec = ccclass('MatchManager'), _dec(_class = /*#__PURE__*/function () {
        function MatchManager(grid, scoreManager, positionData) {
          this.grid = void 0;
          this.scoreManager = void 0;
          this.positionData = void 0;
          this.grid = grid;
          this.scoreManager = scoreManager;
          this.positionData = positionData;
        }
        var _proto = MatchManager.prototype;
        _proto.collectAllMatches = function collectAllMatches() {
          var allMatches = [];
          // For each row using sliding window logic:
          for (var row = 0; row < this.grid.length; row++) {
            var rowMatches = this.findMatchesInRow(row);
            if (rowMatches.length > 0) {
              allMatches.push.apply(allMatches, rowMatches);
            }
          }
          // Similarly for columns:
          for (var col = 0; col < this.grid[0].length; col++) {
            var colMatches = this.findMatchesInColumn(col);
            if (colMatches.length > 0) {
              allMatches.push.apply(allMatches, colMatches);
            }
          }
          return allMatches;
        };
        _proto.findMatchesInRow = function findMatchesInRow(row) {
          var matches = [];
          var start = 0,
            sum = 0;
          var windowBlocks = [];
          for (var end = 0; end < this.grid[row].length; end++) {
            var block = this.grid[row][end];
            if (!block) {
              sum = 0;
              windowBlocks = [];
              start = end + 1;
              continue;
            }
            var tileItem = block.getComponent(TileItemUI);
            sum += tileItem.TileNum;
            windowBlocks.push(block);
            while (sum > 10 && start <= end) {
              var removeTile = this.grid[row][start];
              sum -= removeTile.getComponent(TileItemUI).TileNum;
              windowBlocks.shift();
              start++;
            }
            if (sum === 10) {
              matches.push([].concat(windowBlocks));
            }
          }
          return matches;
        };
        _proto.findMatchesInColumn = function findMatchesInColumn(col) {
          var matches = [];
          var start = 0,
            sum = 0;
          var windowBlocks = [];
          for (var end = 0; end < this.grid.length; end++) {
            var block = this.grid[end][col];
            if (!block) {
              sum = 0;
              windowBlocks = [];
              start = end + 1;
              continue;
            }
            var tileItem = block.getComponent(TileItemUI);
            sum += tileItem.TileNum;
            windowBlocks.push(block);
            while (sum > 10 && start <= end) {
              var removeTile = this.grid[start][col];
              sum -= removeTile.getComponent(TileItemUI).TileNum;
              windowBlocks.shift();
              start++;
            }
            if (sum === 10) {
              matches.push([].concat(windowBlocks));
            }
          }
          return matches;
        };
        _proto.processMatches = /*#__PURE__*/function () {
          var _processMatches = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var matches, destroyPromises, _iterator, _step, group, _iterator2, _step2, block, tileItem;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  matches = this.collectAllMatches();
                  if (!(matches.length === 0)) {
                    _context.next = 3;
                    break;
                  }
                  return _context.abrupt("return");
                case 3:
                  destroyPromises = [];
                  for (_iterator = _createForOfIteratorHelperLoose(matches); !(_step = _iterator()).done;) {
                    group = _step.value;
                    for (_iterator2 = _createForOfIteratorHelperLoose(group); !(_step2 = _iterator2()).done;) {
                      block = _step2.value;
                      tileItem = block.getComponent(TileItemUI);
                      destroyPromises.push(tileItem.destroyTile());
                      // Remove from grid
                      this.grid[tileItem.Row][tileItem.Col] = null;
                      this.scoreManager.showScoreTooltip(block, 5);
                    }
                    this.scoreManager.addScore(group.length * 5);
                  }
                  _context.next = 7;
                  return Promise.all(destroyPromises);
                case 7:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function processMatches() {
            return _processMatches.apply(this, arguments);
          }
          return processMatches;
        }();
        return MatchManager;
      }()) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MathUtils.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports({
        getDegreeAngleFromDirection: getDegreeAngleFromDirection,
        randomPositiveOrNegative: randomPositiveOrNegative,
        roundToOneDecimal: roundToOneDecimal
      });
      cclegacy._RF.push({}, "93ac2ZIsghGYpEaaIaECE4q", "MathUtils", undefined);
      function roundToOneDecimal(num) {
        return Math.round(num * 10) / 10;
      }
      function randomPositiveOrNegative() {
        return Math.random() < 0.5 ? 1 : -1;
      }
      function getDegreeAngleFromDirection(x, y) {
        var radianAngle = Math.atan2(y, x);
        var angle = radianAngle / Math.PI * 180;
        return angle < 0 ? angle + 360 : angle;
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Menu.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AppRoot.ts', './AppRootUtils.ts', './UIButton.ts', './GameRunner.ts', './MenuModalLauncher.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, Label, Canvas, Component, AppRoot, requireAppRootAsync, UIButton, GameRunner, MenuModalLauncher;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      Canvas = module.Canvas;
      Component = module.Component;
    }, function (module) {
      AppRoot = module.AppRoot;
    }, function (module) {
      requireAppRootAsync = module.requireAppRootAsync;
    }, function (module) {
      UIButton = module.UIButton;
    }, function (module) {
      GameRunner = module.GameRunner;
    }, function (module) {
      MenuModalLauncher = module.MenuModalLauncher;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "22c61zFd7hNRaAttffaS6ep", "Menu", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Menu = exports('Menu', (_dec = ccclass("Menu"), _dec2 = property(UIButton), _dec3 = property(UIButton), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(UIButton), _dec8 = property(Canvas), _dec9 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Menu, _Component);
        function Menu() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "playBtn", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "upgradeBtn", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "upgradeAvailableIndicator", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "goldCounter", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "goldLabel", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "audioSettingsBtn", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "menuCanvas", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "highscoreLabel", _descriptor8, _assertThisInitialized(_this));
          _this.menuModalLauncher = void 0;
          return _this;
        }
        var _proto = Menu.prototype;
        _proto.start = /*#__PURE__*/function () {
          var _start = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  requireAppRootAsync();
                  this.menuCanvas.cameraComponent = AppRoot.Instance.MainCamera;
                  this.playBtn.InteractedEvent.on(this.startGame, this);
                  this.upgradeBtn.InteractedEvent.on(this.openUpgradesWindow, this);
                  this.audioSettingsBtn.InteractedEvent.on(this.openAudioSettingsWindow, this);
                  this.menuModalLauncher = new MenuModalLauncher(AppRoot.Instance.ModalWindowManager);
                  this.highscoreLabel.string = "Highscore: " + Math.floor(AppRoot.Instance.LiveUserData.game.highscore);
                  this.updateGoldIndicators();
                case 8:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function start() {
            return _start.apply(this, arguments);
          }
          return start;
        }();
        _proto.updateGoldIndicators = function updateGoldIndicators() {
          this.upgradeAvailableIndicator.active = this.isUpgradeAffordable();
          var goldCoins = AppRoot.Instance.LiveUserData.game.goldCoins;
          this.goldCounter.active = 0 < goldCoins;
          this.goldLabel.string = goldCoins.toString();
        };
        _proto.isUpgradeAffordable = function isUpgradeAffordable() {
          var goldCoins = AppRoot.Instance.LiveUserData.game.goldCoins;
          var metaUpgrades = AppRoot.Instance.LiveUserData.game.metaUpgrades;
          var metaUpgradesSettings = AppRoot.Instance.Settings.metaUpgrades;
          var costs = [];
          this.tryPushLowestCost(metaUpgrades.goldGathererLevel, metaUpgradesSettings.goldGatherer, costs);
          this.tryPushLowestCost(metaUpgrades.healthLevel, metaUpgradesSettings.health, costs);
          this.tryPushLowestCost(metaUpgrades.movementSpeedLevel, metaUpgradesSettings.movementSpeed, costs);
          this.tryPushLowestCost(metaUpgrades.overallDamageLevel, metaUpgradesSettings.overallDamage, costs);
          this.tryPushLowestCost(metaUpgrades.projectilePiercingLevel, metaUpgradesSettings.projectilePiercing, costs);
          this.tryPushLowestCost(metaUpgrades.xpGathererLevel, metaUpgradesSettings.xpGatherer, costs);
          return 0 < costs.length ? Math.min.apply(Math, costs) <= goldCoins : false;
        };
        _proto.tryPushLowestCost = function tryPushLowestCost(upgradeLevel, metaUpgradeSettings, costs) {
          if (upgradeLevel < metaUpgradeSettings.costs.length) {
            costs.push(metaUpgradeSettings.costs[upgradeLevel]);
          }
        };
        _proto.startGame = function startGame() {
          GameRunner.Instance.playGame();
        };
        _proto.openUpgradesWindow = /*#__PURE__*/function () {
          var _openUpgradesWindow = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return this.menuModalLauncher.openUpgradesWindow();
                case 2:
                  this.updateGoldIndicators();
                case 3:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function openUpgradesWindow() {
            return _openUpgradesWindow.apply(this, arguments);
          }
          return openUpgradesWindow;
        }();
        _proto.openAudioSettingsWindow = function openAudioSettingsWindow() {
          this.menuModalLauncher.openAudioSettingsWindow();
        };
        return Menu;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "playBtn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "upgradeBtn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "upgradeAvailableIndicator", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "goldCounter", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "goldLabel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "audioSettingsBtn", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "menuCanvas", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "highscoreLabel", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MenuModalLauncher.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MenuModalWindowTypes.ts'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, cclegacy, MenuModalWindowTypes;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      MenuModalWindowTypes = module.MenuModalWindowTypes;
    }],
    execute: function () {
      cclegacy._RF.push({}, "fc622fSex1J84Wiq9uC4WOL", "MenuModalLauncher", undefined);
      var MenuModalLauncher = exports('MenuModalLauncher', /*#__PURE__*/function () {
        function MenuModalLauncher(modalWindowManager) {
          this.modalWindowManager = modalWindowManager;
        }
        var _proto = MenuModalLauncher.prototype;
        _proto.openUpgradesWindow = /*#__PURE__*/function () {
          var _openUpgradesWindow = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this.modalWindowManager.showModal(MenuModalWindowTypes.Upgrades, {});
                case 2:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function openUpgradesWindow() {
            return _openUpgradesWindow.apply(this, arguments);
          }
          return openUpgradesWindow;
        }();
        _proto.openAudioSettingsWindow = /*#__PURE__*/function () {
          var _openAudioSettingsWindow = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return this.modalWindowManager.showModal(MenuModalWindowTypes.AudioSettings, {});
                case 2:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function openAudioSettingsWindow() {
            return _openAudioSettingsWindow.apply(this, arguments);
          }
          return openAudioSettingsWindow;
        }();
        return MenuModalLauncher;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MenuModalWindowTypes.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5c0f4Hq9ARFKrF7Ds39Cl9x", "MenuModalWindowTypes", undefined);
      var MenuModalWindowTypes = exports('MenuModalWindowTypes', /*#__PURE__*/function (MenuModalWindowTypes) {
        MenuModalWindowTypes["Upgrades"] = "UpgradesModalWindow";
        MenuModalWindowTypes["AudioSettings"] = "AudioSettingsModalWindow";
        return MenuModalWindowTypes;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MetaUpgradeIcons.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UpgradeType.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, SpriteFrame, Component, MetaUpgradeType;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      SpriteFrame = module.SpriteFrame;
      Component = module.Component;
    }, function (module) {
      MetaUpgradeType = module.MetaUpgradeType;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "b18fbEgJGZOJ6w+6tEMaD+0", "MetaUpgradeIcons", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var MetaUpgradeIcons = exports('MetaUpgradeIcons', (_dec = ccclass("MetaUpgradeIcons"), _dec2 = property(SpriteFrame), _dec3 = property(SpriteFrame), _dec4 = property(SpriteFrame), _dec5 = property(SpriteFrame), _dec6 = property(SpriteFrame), _dec7 = property(SpriteFrame), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MetaUpgradeIcons, _Component);
        function MetaUpgradeIcons() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "healthSprite", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "overallDamageSprite", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "projectilePiercingSprite", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "movementSpeedSprite", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "xpGathererSprite", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "goldGathererSprite", _descriptor6, _assertThisInitialized(_this));
          _this.typeToIcon = new Map();
          return _this;
        }
        var _proto = MetaUpgradeIcons.prototype;
        _proto.init = function init() {
          this.typeToIcon.set(MetaUpgradeType.Health, this.healthSprite);
          this.typeToIcon.set(MetaUpgradeType.OverallDamage, this.overallDamageSprite);
          this.typeToIcon.set(MetaUpgradeType.ProjectilePiercing, this.projectilePiercingSprite);
          this.typeToIcon.set(MetaUpgradeType.MovementSpeed, this.movementSpeedSprite);
          this.typeToIcon.set(MetaUpgradeType.XPGatherer, this.xpGathererSprite);
          this.typeToIcon.set(MetaUpgradeType.GoldGatherer, this.goldGathererSprite);
        };
        _proto.getIcon = function getIcon(upgradeType) {
          if (!this.typeToIcon.has(upgradeType)) throw new Error("Does not have upgrade type asset " + upgradeType);
          return this.typeToIcon.get(upgradeType);
        };
        return MetaUpgradeIcons;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "healthSprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "overallDamageSprite", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "projectilePiercingSprite", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "movementSpeedSprite", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "xpGathererSprite", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "goldGathererSprite", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ModalWindow.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UIButton.ts', './AsyncUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Animation, Component, UIButton, delay;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Animation = module.Animation;
      Component = module.Component;
    }, function (module) {
      UIButton = module.UIButton;
    }, function (module) {
      delay = module.delay;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "69f01H/95hOA6GxZJCsyPsP", "ModalWindow", undefined);
      var property = _decorator.property;
      var ModalWindow = exports('ModalWindow', (_dec = property(Animation), _dec2 = property(UIButton), _dec3 = property(UIButton), (_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ModalWindow, _Component);
        function ModalWindow() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "animation", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "closeButton", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "backgroundCloseButton", _descriptor3, _assertThisInitialized(_this));
          _this.result = void 0;
          _this.isDismissed = false;
          _this.openAnimationName = "open";
          _this.closeAnimationName = "close";
          return _this;
        }
        var _proto = ModalWindow.prototype;
        _proto.runAsync = /*#__PURE__*/function () {
          var _runAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(params, initData) {
            var _this$animation, _this$animation2;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  // this.closeButton?.InteractedEvent.on(() => this.dismiss(), this);
                  // this.backgroundCloseButton?.InteractedEvent.on(() => this.dismiss(), this);

                  this.setup(params, initData);
                  (_this$animation = this.animation) == null || _this$animation.play(this.openAnimationName);
                case 2:
                  if (this.isDismissed) {
                    _context.next = 7;
                    break;
                  }
                  _context.next = 5;
                  return delay(100);
                case 5:
                  _context.next = 2;
                  break;
                case 7:
                  (_this$animation2 = this.animation) == null || _this$animation2.play(this.closeAnimationName);
                  _context.next = 10;
                  return delay(this.getCloseAnimationTime() * 1000);
                case 10:
                  return _context.abrupt("return", this.result);
                case 11:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function runAsync(_x, _x2) {
            return _runAsync.apply(this, arguments);
          }
          return runAsync;
        }();
        _proto.dismiss = function dismiss(result) {
          this.result = result;
          this.isDismissed = true;
          // this.closeButton?.InteractedEvent.off(() => this.dismiss());
          // this.backgroundCloseButton?.InteractedEvent.off(() => this.dismiss());
        };

        _proto.getCloseAnimationTime = function getCloseAnimationTime() {
          var _this$animation3;
          var state = (_this$animation3 = this.animation) == null ? void 0 : _this$animation3.getState(this.closeAnimationName);
          if (state != null) {
            return state.duration;
          }
          return 0;
        };
        return ModalWindow;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "animation", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "closeButton", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "backgroundCloseButton", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class)));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ModalWindowManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Prefab, Component, instantiate;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Component = module.Component;
      instantiate = module.instantiate;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "c623fhj2b5Cyau8MBXLOmVF", "ModalWindowManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ModalWindowManager = exports('ModalWindowManager', (_dec = ccclass("ModalWindowManager"), _dec2 = property(Prefab), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ModalWindowManager, _Component);
        function ModalWindowManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "availableWindows", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = ModalWindowManager.prototype;
        _proto.showModal = /*#__PURE__*/function () {
          var _showModal = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(name, params, initData) {
            var windowPrefab, windowNode, modalWindow, result;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  windowPrefab = this.availableWindows.find(function (w) {
                    return w.name === name;
                  });
                  windowNode = instantiate(windowPrefab);
                  windowNode.setParent(this.node);
                  modalWindow = windowNode.getComponent(name);
                  _context.next = 6;
                  return modalWindow.runAsync(params, initData);
                case 6:
                  result = _context.sent;
                  windowNode.destroy();
                  return _context.abrupt("return", result);
                case 9:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function showModal(_x, _x2, _x3) {
            return _showModal.apply(this, arguments);
          }
          return showModal;
        }();
        _proto.showPopup = /*#__PURE__*/function () {
          var _showPopup = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(componentClass,
          // The actual class
          prefabName, params, initData) {
            var windowPrefab, windowNode, modalWindow, result;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  windowPrefab = this.availableWindows.find(function (w) {
                    return w.name === prefabName;
                  });
                  windowNode = instantiate(windowPrefab);
                  windowNode.setParent(this.node);

                  // Use getComponent with the class reference
                  modalWindow = windowNode.getComponent(componentClass);
                  if (modalWindow) {
                    _context2.next = 6;
                    break;
                  }
                  throw new Error("No component found for " + prefabName);
                case 6:
                  _context2.next = 8;
                  return modalWindow.runAsync(params, initData);
                case 8:
                  result = _context2.sent;
                  windowNode.destroy();
                  return _context2.abrupt("return", result);
                case 11:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function showPopup(_x4, _x5, _x6, _x7) {
            return _showPopup.apply(this, arguments);
          }
          return showPopup;
        }();
        return ModalWindowManager;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "availableWindows", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MultiInput.ts", ['cc'], function (exports) {
  var cclegacy, Vec2;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Vec2 = module.Vec2;
    }],
    execute: function () {
      cclegacy._RF.push({}, "679d7wF37RD6IEVmvI1Iicz", "MultiInput", undefined);
      var MultiInput = exports('MultiInput', /*#__PURE__*/function () {
        function MultiInput(inputs) {
          this.inputs = void 0;
          this.inputs = inputs;
        }
        var _proto = MultiInput.prototype;
        _proto.getAxis = function getAxis() {
          for (var i = 0; i < this.inputs.length; i++) {
            if (!this.inputs[i].getAxis().equals(Vec2.ZERO)) {
              return this.inputs[i].getAxis();
            }
          }
          return new Vec2();
        };
        return MultiInput;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/NumberGenerator.ts", ['cc'], function (exports) {
  var cclegacy, _decorator;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "25264ia7ONPo7g9SmIV9FJS", "NumberGenerator", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var NumberGenerator = exports('default', ccclass(_class = /*#__PURE__*/function () {
        function NumberGenerator() {}
        var _proto = NumberGenerator.prototype;
        /**
        * Generates an array of random numbers from [7, 8, 9]
        * such that no two consecutive numbers are identical.
        * @param length The length of the array to generate.
        * @returns number[] An array of random numbers (7, 8, or 9) with no repeats in a row.
        */
        _proto.generateRandomHighNos = function generateRandomHighNos(length) {
          var result = [];
          var possibleValues = [7, 8, 9];
          var prev = null;
          for (var i = 0; i < length; i++) {
            var candidate = void 0;
            do {
              candidate = possibleValues[Math.floor(Math.random() * possibleValues.length)];
            } while (candidate === prev);
            result.push(candidate);
            prev = candidate;
          }
          return result;
        };
        return NumberGenerator;
      }()) || _class);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ObjectPool.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy, instantiate;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      instantiate = module.instantiate;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a4ed3tMiYlPCJMDTXo66QcD", "ObjectPool", undefined);
      var ObjectPool = exports('ObjectPool', /*#__PURE__*/function () {
        function ObjectPool(prefab, parent, defaultPoolCount, componentName) {
          this.prefab = void 0;
          this.parent = void 0;
          this.pooledObjects = [];
          this.componentName = void 0;
          this.prefab = prefab;
          this.parent = parent;
          this.componentName = componentName;
          for (var i = 0; i < defaultPoolCount; i++) {
            this.createNew();
          }
        }
        var _proto = ObjectPool.prototype;
        _proto.borrow = function borrow() {
          var objectToBorrow = this.pooledObjects.find(function (o) {
            return !o.IsBorrowed;
          });
          if (objectToBorrow != null) {
            return objectToBorrow.borrow();
          }
          return this.createNew().borrow();
        };
        _proto["return"] = function _return(object) {
          var objectToReturn = this.pooledObjects.find(function (o) {
            return o.Equals(object);
          });
          if (objectToReturn == null) {
            throw new Error("Object " + this.prefab.name + " is not a member of the pool");
          }
          objectToReturn["return"]();
        };
        _proto.createNew = function createNew() {
          var newPooledObject = new PooledObject(this.prefab, this.parent, this.componentName);
          this.pooledObjects.push(newPooledObject);
          return newPooledObject;
        };
        return ObjectPool;
      }());
      var PooledObject = /*#__PURE__*/function () {
        function PooledObject(prefab, defaultParent, componentName) {
          this.isBorrowed = false;
          this.defaultParent = void 0;
          this.instancedNode = void 0;
          this.instancedComponent = void 0;
          this.defaultParent = defaultParent;
          this.instancedNode = instantiate(prefab);
          this.instancedComponent = this.instancedNode.getComponent(componentName);
          if (this.instancedComponent == null) {
            console.error("Object " + prefab.name + " does not have component " + componentName);
          }
          this.clear();
        }
        var _proto2 = PooledObject.prototype;
        _proto2.Equals = function Equals(component) {
          return this.instancedComponent == component;
        };
        _proto2.borrow = function borrow() {
          this.isBorrowed = true;
          return this.instancedComponent;
        };
        _proto2["return"] = function _return() {
          this.clear();
        };
        _proto2.clear = function clear() {
          this.instancedNode.active = false;
          this.instancedNode.parent = this.defaultParent;
          this.isBorrowed = false;
        };
        _createClass(PooledObject, [{
          key: "IsBorrowed",
          get: function get() {
            return this.isBorrowed;
          }
        }]);
        return PooledObject;
      }();
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/OpenCloseAnimator.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AsyncUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Animation, Component, delay;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Animation = module.Animation;
      Component = module.Component;
    }, function (module) {
      delay = module.delay;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "f9bdcLpmMdIgqWNOgetdMv1", "OpenCloseAnimator", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var OpenCloseAnimator = exports('OpenCloseAnimator', (_dec = ccclass("OpenCloseAnimator"), _dec2 = property(Animation), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(OpenCloseAnimator, _Component);
        function OpenCloseAnimator() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "animation", _descriptor, _assertThisInitialized(_this));
          _this.openStateName = "Open";
          _this.closeStateName = "Close";
          _this.openDuration = 0;
          _this.closeDuration = 0;
          return _this;
        }
        var _proto = OpenCloseAnimator.prototype;
        _proto.init = function init() {
          this.openDuration = this.animation.getState(this.openStateName).duration;
          this.closeDuration = this.animation.getState(this.closeStateName).duration;
        };
        _proto.playOpen = /*#__PURE__*/function () {
          var _playOpen = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  this.node.active = true;
                  this.animation.play(this.openStateName);
                  _context.next = 4;
                  return delay(this.openDuration * 1000);
                case 4:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function playOpen() {
            return _playOpen.apply(this, arguments);
          }
          return playOpen;
        }();
        _proto.playClose = /*#__PURE__*/function () {
          var _playClose = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  this.node.active = true;
                  this.animation.play(this.closeStateName);
                  _context2.next = 4;
                  return delay(this.closeDuration * 1000);
                case 4:
                  this.node.active = false;
                case 5:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function playClose() {
            return _playClose.apply(this, arguments);
          }
          return playClose;
        }();
        return OpenCloseAnimator;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "animation", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PauseModalWindow.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MenuModalWindowTypes.ts', './ModalWindow.ts', './UIButton.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, MenuModalWindowTypes, ModalWindow, UIButton;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      MenuModalWindowTypes = module.MenuModalWindowTypes;
    }, function (module) {
      ModalWindow = module.ModalWindow;
    }, function (module) {
      UIButton = module.UIButton;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "7951egxdo1MwZEP2TuQOLOq", "PauseModalWindow", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PauseModalWindow = exports('PauseModalWindow', (_dec = ccclass("PauseModalWindow"), _dec2 = property(UIButton), _dec3 = property(UIButton), _dec4 = property(UIButton), _dec(_class = (_class2 = /*#__PURE__*/function (_ModalWindow) {
        _inheritsLoose(PauseModalWindow, _ModalWindow);
        function PauseModalWindow() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ModalWindow.call.apply(_ModalWindow, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "continueBtn", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "audioSettingsButton", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "exitBtn", _descriptor3, _assertThisInitialized(_this));
          _this.modalWindowManager = void 0;
          return _this;
        }
        var _proto = PauseModalWindow.prototype;
        _proto.setup = function setup(modalWindowManager) {
          this.modalWindowManager = modalWindowManager;
          this.continueBtn.InteractedEvent.on(this.continueGame, this);
          this.audioSettingsButton.InteractedEvent.on(this.openSettingsWindow, this);
          this.exitBtn.InteractedEvent.on(this.exitGame, this);
        };
        _proto.unSubscribeEvents = function unSubscribeEvents() {
          this.continueBtn.InteractedEvent.off(this.continueGame);
          this.audioSettingsButton.InteractedEvent.off(this.openSettingsWindow);
          this.exitBtn.InteractedEvent.off(this.exitGame);
        };
        _proto.openSettingsWindow = function openSettingsWindow() {
          this.modalWindowManager.showModal(MenuModalWindowTypes.AudioSettings, {});
        };
        _proto.continueGame = function continueGame() {
          this.unSubscribeEvents();
          this.dismiss(false);
        };
        _proto.exitGame = function exitGame() {
          this.unSubscribeEvents();
          this.dismiss(true);
        };
        return PauseModalWindow;
      }(ModalWindow), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "continueBtn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "audioSettingsButton", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "exitBtn", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Pauser.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d20ebZ4qvlH5r0SQ/o308m6", "Pauser", undefined);
      var Pauser = exports('Pauser', /*#__PURE__*/function () {
        function Pauser() {
          this.isPaused = false;
        }
        var _proto = Pauser.prototype;
        _proto.pause = function pause() {
          this.isPaused = true;
        };
        _proto.resume = function resume() {
          this.isPaused = false;
        };
        _createClass(Pauser, [{
          key: "IsPaused",
          get: function get() {
            return this.isPaused;
          }
        }]);
        return Pauser;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PickupEffect.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Animation, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Animation = module.Animation;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "0f2b2zQHR5IYoIfX8uDxOwj", "PickupEffect", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PickupEffect = exports('PickupEffect', (_dec = ccclass("PickupEffect"), _dec2 = property(Animation), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PickupEffect, _Component);
        function PickupEffect() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "animation", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = PickupEffect.prototype;
        _proto.init = function init() {
          this.animation.play("PickBonus");
        };
        return PickupEffect;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "animation", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PickupEffectManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ObjectPool.ts', './AsyncUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Prefab, Component, ObjectPool, delay;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Component = module.Component;
    }, function (module) {
      ObjectPool = module.ObjectPool;
    }, function (module) {
      delay = module.delay;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "65b41IfpM9H4ZfUHg0/xy7s", "PickupEffectManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PickupEffectManager = exports('PickupEffectManager', (_dec = ccclass("PickupEffectManager"), _dec2 = property(Prefab), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PickupEffectManager, _Component);
        function PickupEffectManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "pickupEffect", _descriptor, _assertThisInitialized(_this));
          _this.effectPool = void 0;
          return _this;
        }
        var _proto = PickupEffectManager.prototype;
        _proto.init = function init() {
          this.effectPool = new ObjectPool(this.pickupEffect, this.node, 5, "PickupEffect");
        };
        _proto.showEffect = /*#__PURE__*/function () {
          var _showEffect = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(position) {
            var _this$effectPool;
            var effect;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  effect = this.effectPool.borrow();
                  effect.node.setWorldPosition(position);
                  effect.node.active = true;
                  _context.next = 5;
                  return delay(450);
                case 5:
                  (_this$effectPool = this.effectPool) == null || _this$effectPool["return"](effect);
                case 6:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function showEffect(_x) {
            return _showEffect.apply(this, arguments);
          }
          return showEffect;
        }();
        return PickupEffectManager;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "pickupEffect", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RuntimeAssetKeeper.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "ffe4emBDepAnb7ts4LNWCw5", "RuntimeAssetKeeper", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var RuntimeAssetKeeper = exports('RuntimeAssetKeeper', (_dec = ccclass('RuntimeAssetKeeper'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RuntimeAssetKeeper, _Component);
        function RuntimeAssetKeeper() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = RuntimeAssetKeeper.prototype;
        _proto.start = function start() {};
        _proto.update = function update(deltaTime) {};
        return RuntimeAssetKeeper;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SaveSystem.ts", ['cc', './UserData.ts'], function (exports) {
  var cclegacy, sys, UserData;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
    }, function (module) {
      UserData = module.UserData;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ed50c1LIfpKzJ/ukquvPiE0", "SaveSystem", undefined);
      var SaveSystem = exports('SaveSystem', /*#__PURE__*/function () {
        function SaveSystem() {
          this.userDataIdentifier = "user-dse";
        }
        var _proto = SaveSystem.prototype;
        _proto.save = function save(userData) {
          sys.localStorage.setItem(this.userDataIdentifier, JSON.stringify(userData));
        };
        _proto.load = function load() {
          var data = sys.localStorage.getItem(this.userDataIdentifier);
          if (!data) return new UserData();
          try {
            // TODO: the data can be corrupted if we introduce a new field in UserData
            return JSON.parse(data);
          } catch (error) {
            return new UserData();
          }
        };
        return SaveSystem;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ScoreManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Prefab, sys, instantiate, Vec3, tween, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Prefab = module.Prefab;
      sys = module.sys;
      instantiate = module.instantiate;
      Vec3 = module.Vec3;
      tween = module.tween;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "47db7mQq/FDN4IRsIzGX+hp", "ScoreManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ScoreManager = exports('default', (_dec = ccclass('ScoreManager'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Prefab), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ScoreManager, _Component);
        function ScoreManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "scoreLabel", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "highScoreLabel", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "throwsCntLabel", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "levelLabel", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tooltipPrefab", _descriptor5, _assertThisInitialized(_this));
          _this.currentScore = 0;
          _this.highScore = 0;
          _this.throwCounter = 0;
          _this.levelCounter = 0;
          _this.savedHighScore = 0;
          _this.sequenceCounter = 0;
          _this.turnConfig = void 0;
          _this.highScoreKey = "highScore";
          return _this;
        }
        var _proto = ScoreManager.prototype;
        _proto.init = function init(turnConfig) {
          this.turnConfig = turnConfig;
          this.loadhighScore();
          this.updateUI();
        };
        _proto.loadhighScore = function loadhighScore() {
          var savedhighScore = this.loadHighScore();
          this.savedHighScore = savedhighScore;
          this.highScore = savedhighScore ? savedhighScore : 0;
          this.throwCounter = this.turnConfig[0].turns;
          this.levelCounter = 1;
        };
        _proto.updateTurnsOnLevelEnd = function updateTurnsOnLevelEnd() {
          this.throwCounter = this.turnConfig[this.levelCounter].turns;
        };
        _proto.loadHighScore = function loadHighScore() {
          try {
            if (sys.localStorage) {
              return parseInt(sys.localStorage.getItem(this.highScoreKey)) || 0;
            }
          } catch (e) {
            console.warn("Storage access error. Returning 0 as high score:", e);
            return 0;
          }
        };
        _proto.addScore = function addScore(points) {
          this.currentScore += points;
          if (this.currentScore > this.highScore) {
            this.highScore = this.currentScore;
            this.saveHighScore();
          }
          this.updateUI();
        };
        _proto.updateThrows = function updateThrows() {
          this.throwCounter--;
          if (this.throwCounter <= 0) {
            this.throwCounter = 0;
            this.levelCounter++;
          }
          this.updateUI();
        };
        _proto.initalizeThrows = function initalizeThrows() {
          this.throwCounter = this.turnConfig[this.levelCounter].turns;
          this.updateUI();
        };
        _proto.saveHighScore = function saveHighScore() {
          try {
            if (sys.localStorage) {
              sys.localStorage.setItem(this.highScoreKey, this.highScore.toString());
              console.log("New High Score Saved:", this.highScore);
            }
          } catch (e) {
            console.warn("Storage access error. High score not saved:", e);
          }
        };
        _proto.resetScore = function resetScore() {
          this.currentScore = 0;
          this.updateUI(); // Update the score label
        };

        _proto.updateUI = function updateUI() {
          this.scoreLabel.string = "" + this.currentScore;
          this.highScoreLabel.string = "" + this.highScore;
          this.throwsCntLabel.string = "" + this.throwCounter;
          this.levelLabel.string = "" + this.levelCounter;
        };
        _proto.getScore = function getScore() {
          return this.currentScore;
        };
        _proto.getHighScore = function getHighScore() {
          return this.highScore;
        };
        _proto.getLevel = function getLevel() {
          return this.levelCounter;
        };
        _proto.getTurns = function getTurns() {
          return this.throwCounter;
        };
        _proto.getAverageScore = function getAverageScore() {
          return this.currentScore * 0.6;
        };
        _proto.getSequenceScore = function getSequenceScore() {
          return this.sequenceCounter;
        };
        _proto.showScoreTooltip = function showScoreTooltip(block, points) {
          if (!this.tooltipPrefab) return;
          var tooltip = instantiate(this.tooltipPrefab);
          tooltip.getComponentInChildren(Label).string = "+" + points;
          tooltip.setParent(block.parent);
          tooltip.setPosition(new Vec3(block.position.x, block.position.y + 100, block.position.z));

          // Move up slightly & fade out
          tween(tooltip).to(0.5, {
            position: new Vec3(block.position.x, block.position.y + 100, 0)
          }).call(function () {
            return tooltip.destroy();
          }).start();
        };
        return ScoreManager;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scoreLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "highScoreLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "throwsCntLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "levelLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "tooltipPrefab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SerialisedAssets.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameModels.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, SpriteFrame, Component, SpriteTypes;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      SpriteFrame = module.SpriteFrame;
      Component = module.Component;
    }, function (module) {
      SpriteTypes = module.SpriteTypes;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12;
      cclegacy._RF.push({}, "a6d2duU6DlKsK8JhcR5AY+C", "SerialisedAssets", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SerialisedAssets = exports('SerialisedAssets', (_dec = ccclass('SerialisedAssets'), _dec2 = property(SpriteFrame), _dec3 = property(SpriteFrame), _dec4 = property(SpriteFrame), _dec5 = property(SpriteFrame), _dec6 = property(SpriteFrame), _dec7 = property(SpriteFrame), _dec8 = property(SpriteFrame), _dec9 = property(SpriteFrame), _dec10 = property(SpriteFrame), _dec11 = property(SpriteFrame), _dec12 = property(SpriteFrame), _dec13 = property(SpriteFrame), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SerialisedAssets, _Component);
        function SerialisedAssets() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "nineSprite", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "eightSprite", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sevenSprite", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sixSprite", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fiveSprite", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fourSprite", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "threeSprite", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "twoSprite", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "oneSprite", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "IceSprite", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "crackedIceSprite", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "blockerprite", _descriptor12, _assertThisInitialized(_this));
          _this.typeToIcon = new Map();
          return _this;
        }
        var _proto = SerialisedAssets.prototype;
        _proto.onEnable = function onEnable() {
          this.init();
        };
        _proto.init = function init() {
          this.typeToIcon.set(SpriteTypes.Nine, this.nineSprite);
          this.typeToIcon.set(SpriteTypes.Eight, this.eightSprite);
          this.typeToIcon.set(SpriteTypes.Seven, this.sevenSprite);
          this.typeToIcon.set(SpriteTypes.Six, this.sixSprite);
          this.typeToIcon.set(SpriteTypes.Five, this.fiveSprite);
          this.typeToIcon.set(SpriteTypes.Four, this.fourSprite);
          this.typeToIcon.set(SpriteTypes.Three, this.threeSprite);
          this.typeToIcon.set(SpriteTypes.Two, this.twoSprite);
          this.typeToIcon.set(SpriteTypes.One, this.oneSprite);
          this.typeToIcon.set(SpriteTypes.ICE, this.IceSprite);
          this.typeToIcon.set(SpriteTypes.IceCracked, this.crackedIceSprite);
          this.typeToIcon.set(SpriteTypes.Blocker, this.blockerprite);
        };
        _proto.getIcon = function getIcon(upgradeType) {
          if (!this.typeToIcon.has(upgradeType)) throw new Error("Does not have upgrade type asset " + upgradeType);
          return this.typeToIcon.get(upgradeType);
        };
        _proto.getIconByNumber = function getIconByNumber(num) {
          switch (num) {
            case 9:
              return this.getIcon(SpriteTypes.Nine);
            case 8:
              return this.getIcon(SpriteTypes.Eight);
            case 7:
              return this.getIcon(SpriteTypes.Seven);
            case 6:
              return this.getIcon(SpriteTypes.Six);
            case 5:
              return this.getIcon(SpriteTypes.Five);
            case 4:
              return this.getIcon(SpriteTypes.Four);
            case 3:
              return this.getIcon(SpriteTypes.Three);
            case 2:
              return this.getIcon(SpriteTypes.Two);
            default:
              return this.getIcon(SpriteTypes.One);
          }
        };
        return SerialisedAssets;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nineSprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "eightSprite", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "sevenSprite", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "sixSprite", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "fiveSprite", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "fourSprite", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "threeSprite", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "twoSprite", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "oneSprite", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "IceSprite", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "crackedIceSprite", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "blockerprite", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Signal.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "190a6ch2CNA/43GIE/jtCi0", "Signal", undefined); // Need to capture *this*
      /* eslint-disable @typescript-eslint/no-explicit-any */
      var Signal = exports('Signal', /*#__PURE__*/function () {
        function Signal() {
          this.handlers = [];
          this.thisArgs = [];
        }
        var _proto = Signal.prototype;
        _proto.on = function on(handler, thisArg) {
          this.handlers.push(handler);
          this.thisArgs.push(thisArg);
        };
        _proto.off = function off(handler) {
          var index = this.handlers.indexOf(handler);
          this.handlers.splice(index, 1);
          this.thisArgs.splice(index, 1);
        };
        _proto.trigger = function trigger(data) {
          // protect from trigger >> off
          var handlers = [].concat(this.handlers);
          var thisArgs = [].concat(this.thisArgs);
          for (var i = 0; i < handlers.length; i++) {
            handlers[i].call(thisArgs[i], data);
          }
        };
        return Signal;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/StringUtils.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('formatString', formatString);
      cclegacy._RF.push({}, "ceda7TLix5L05z7C78DFfxA", "StringUtils", undefined);
      function formatString(text, params) {
        var textWithParams = text;
        for (var i = 0; i < params.length; i++) {
          textWithParams = textWithParams.replace("{" + i + "}", params[i]);
        }
        return textWithParams;
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TestGameRunner.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AppRoot.ts', './GameRunner.ts', './AsyncUtils.ts', './UserData.ts', './Game.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, CCInteger, Component, AppRoot, GameRunner, delay, UserData, Game;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      CCInteger = module.CCInteger;
      Component = module.Component;
    }, function (module) {
      AppRoot = module.AppRoot;
    }, function (module) {
      GameRunner = module.GameRunner;
    }, function (module) {
      delay = module.delay;
    }, function (module) {
      UserData = module.UserData;
    }, function (module) {
      Game = module.Game;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "605c7sb1/tOhb3LnxAsxFGX", "TestGameRunner", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var TestGameRunner = exports('TestGameRunner', (_dec = ccclass("TestGameRunner"), _dec2 = property(CCInteger), _dec3 = property(CCInteger), _dec4 = property(CCInteger), _dec5 = property(CCInteger), _dec6 = property(CCInteger), _dec7 = property(CCInteger), _dec8 = property(CCInteger), _dec9 = property(CCInteger), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TestGameRunner, _Component);
        function TestGameRunner() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "startTime", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "startXP", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maxHpLevel", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bonusDamageLevel", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "projectilePiercingLevel", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "movementSpeedLevel", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "xpGathererLevel", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "goldGathererLevel", _descriptor8, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = TestGameRunner.prototype;
        _proto.start = function start() {
          if (GameRunner.Instance.IsRunning) return;
          this.playTestGameAsync();
        };
        _proto.playTestGameAsync = /*#__PURE__*/function () {
          var _playTestGameAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var testUserData, settings;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!(Game.Instance == null || AppRoot.Instance == null)) {
                    _context.next = 5;
                    break;
                  }
                  _context.next = 3;
                  return delay(100);
                case 3:
                  _context.next = 0;
                  break;
                case 5:
                  testUserData = new UserData();
                  testUserData.game.metaUpgrades.healthLevel = this.maxHpLevel;
                  testUserData.game.metaUpgrades.overallDamageLevel = this.bonusDamageLevel;
                  testUserData.game.metaUpgrades.projectilePiercingLevel = this.projectilePiercingLevel;
                  testUserData.game.metaUpgrades.movementSpeedLevel = this.movementSpeedLevel;
                  testUserData.game.metaUpgrades.xpGathererLevel = this.xpGathererLevel;
                  testUserData.game.metaUpgrades.goldGathererLevel = this.goldGathererLevel;
                  settings = this.getTimeModifiedSettings(AppRoot.Instance.Settings);
                  Game.Instance.play(testUserData, settings, AppRoot.Instance.TranslationData, {
                    startTime: this.startTime,
                    startXP: this.startXP
                  });
                case 14:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function playTestGameAsync() {
            return _playTestGameAsync.apply(this, arguments);
          }
          return playTestGameAsync;
        }();
        _proto.getTimeModifiedSettings = function getTimeModifiedSettings(settings) {
          var spawners = [].concat(settings.enemyManager.circularEnemySpawners, settings.enemyManager.individualEnemySpawners, settings.enemyManager.waveEnemySpawners);
          for (var _iterator = _createForOfIteratorHelperLoose(spawners), _step; !(_step = _iterator()).done;) {
            var spawner = _step.value;
            spawner.common.startDelay -= this.startTime;
            spawner.common.stopDelay -= this.startTime;
          }
          return settings;
        };
        return TestGameRunner;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "startTime", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "startXP", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "maxHpLevel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "bonusDamageLevel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "projectilePiercingLevel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "movementSpeedLevel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "xpGathererLevel", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "goldGathererLevel", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));
      var TestValues = exports('TestValues', function TestValues() {
        this.startTime = 0;
        this.startXP = 0;
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TileAnimationManager.ts", ['cc', './TweenAnimations.ts'], function (exports) {
  var cclegacy, _decorator, tween, TweenAnimations;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      tween = module.tween;
    }, function (module) {
      TweenAnimations = module.default;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "f4304KQmDRNV6t00hei+B4w", "TileAnimationManager", undefined);
      var ccclass = _decorator.ccclass;
      var TileAnimationManager = exports('TileAnimationManager', (_dec = ccclass('TileAnimationManager'), _dec(_class = /*#__PURE__*/function () {
        function TileAnimationManager() {}
        var _proto = TileAnimationManager.prototype;
        /**
         * Animate a tile dropping from startPos to endPos at a constant speed.
         */
        _proto.animateTileDrop = function animateTileDrop(block, startPos, endPos, dropSpeed) {
          var distance = Math.abs(startPos.y - endPos.y);
          var duration = distance / dropSpeed;
          return new Promise(function (resolve) {
            tween(block).to(duration, {
              position: endPos
            }).call(function () {
              return resolve();
            }).start();
          });
        }

        /**
         * Animate a tile destruction (Shake out) over the specified duration.
         */;
        _proto.animateTileDestroy = function animateTileDestroy(block, duration) {
          if (duration === void 0) {
            duration = 0.5;
          }
          return new Promise(function (resolve) {
            TweenAnimations.shake(30, duration, block).call(function () {
              block.active = false;
              block.destroy();
              resolve();
            }).start();
          });
        };
        return TileAnimationManager;
      }()) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TileItemUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Signal.ts', './ConsoleLogger.ts', './TweenAnimations.ts', './GameBoardManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, Sprite, tween, Component, Signal, ConsoleLogger, TweenAnimations, GameBoardManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Sprite = module.Sprite;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      Signal = module.Signal;
    }, function (module) {
      ConsoleLogger = module.default;
    }, function (module) {
      TweenAnimations = module.default;
    }, function (module) {
      GameBoardManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "f7c88RVshdAqZbpSaN40N4d", "TileItemUI", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var TileItemUI = exports('TileItemUI', (_dec = ccclass('TileItemUI'), _dec2 = property(Label), _dec3 = property(Sprite), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TileItemUI, _Component);
        function TileItemUI() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "numberText", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tileSprite", _descriptor2, _assertThisInitialized(_this));
          _this._row = void 0;
          _this._col = void 0;
          _this._tileNum = void 0;
          _this.onTileItemClickedEvent = new Signal();
          _this.onTileSettledInPlaceEvent = new Signal();
          return _this;
        }
        var _proto = TileItemUI.prototype;
        _proto.init = function init(tileData) {
          this._row = tileData.row;
          this._col = tileData.col;
          this._tileNum = tileData.tilenumber;
          this.numberText.string = this._tileNum.toString();
          this.tileSprite.spriteFrame = tileData.tileSprite;
        };
        _proto.SetRowCol = function SetRowCol(r, c) {
          this._row = r;
          this._col = c;
        };
        _proto.onTileClick = function onTileClick() {
          this.onTileItemClickedEvent.trigger(this);
        };
        _proto.destroyTile = /*#__PURE__*/function () {
          var _destroyTile = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this.playDestroyAnim();
                case 2:
                  return _context.abrupt("return", _context.sent);
                case 3:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function destroyTile() {
            return _destroyTile.apply(this, arguments);
          }
          return destroyTile;
        }();
        _proto.playDestroyAnim = /*#__PURE__*/function () {
          var _playDestroyAnim = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _this2 = this;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  return _context2.abrupt("return", new Promise(function (resolve) {
                    TweenAnimations.shake(30, 0.5, _this2.node).call(function () {
                      _this2.node.active = false;
                      _this2.destroy();
                      resolve();
                    }).start();
                  }));
                case 1:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          function playDestroyAnim() {
            return _playDestroyAnim.apply(this, arguments);
          }
          return playDestroyAnim;
        }();
        _proto.moveToPosition = function moveToPosition(position) {
          var _this3 = this;
          var currentPos = this.node.position;
          var distance = Math.abs(currentPos.y - position.y);
          var speed = GameBoardManager.Instance.Speed();
          var time = distance / speed;
          return tween(this.node).to(time, {
            position: position
          }).call(function () {
            return _this3.onMoveComplete();
          });
        };
        _proto.onMoveComplete = function onMoveComplete() {
          ConsoleLogger.instance.info("Block moved to position!");
          this.onTileSettledInPlaceEvent.trigger(this);
        };
        _createClass(TileItemUI, [{
          key: "Row",
          get: function get() {
            return this._row;
          }
        }, {
          key: "Col",
          get: function get() {
            return this._col;
          }
        }, {
          key: "TileNum",
          get: function get() {
            return this._tileNum;
          }
        }, {
          key: "OnTileItemClickedEvent",
          get: function get() {
            return this.onTileItemClickedEvent;
          }
        }, {
          key: "OnTileSettledInPlaceEvent",
          get: function get() {
            return this.onTileSettledInPlaceEvent;
          }
        }]);
        return TileItemUI;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "numberText", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tileSprite", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TranslationData.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "8711bkjTmxK1rqJAGFFDUSh", "TranslationData", undefined);
      var TranslationData = exports('TranslationData', function TranslationData() {});
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TurnManager.ts", ['cc', './GameConstants.ts'], function (exports) {
  var cclegacy, EnMechanicType;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      EnMechanicType = module.EnMechanicType;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4913cOorwJOmrqN8F2Gi6sw", "TurnManager", undefined);
      var TurnManager = exports('TurnManager', /*#__PURE__*/function () {
        function TurnManager() {}
        var _proto = TurnManager.prototype;
        /**
         * Creates an array of TurnConfig objects for indices 0..99.
         * Each element in the array defines:
         *   - mechanic: which obstacle or mechanic will arrive
         *   - turns: how many turns before it arrives
         */
        _proto.createTurnsArray = function createTurnsArray() {
          var turnsArray = [];
          for (var i = 0; i < 100; i++) {
            turnsArray.push({
              mechanic: this.getMechanicForIndex(i),
              turns: this.getTurnsForIndex(i)
            });
          }
          return turnsArray;
        }

        /**
         * Decides which mechanic arrives based on the current index (level).
         * You can adjust thresholds and logic as needed to refine the difficulty curve.
         */;
        _proto.getMechanicForIndex = function getMechanicForIndex(index) {
          return EnMechanicType.HighEnder;

          // if (index < 10) {
          //     // Early levels: HighEnder
          //     return EnMechanicType.HighEnder;
          // } else if (index < 30) {
          //     // Introduce Ice
          //     return EnMechanicType.Ice;
          // } else if (index < 60) {
          //     // Switch to Brick
          //     return EnMechanicType.Brick;
          // } else if (index < 80) {
          //     // Randomly choose Ice or Brick
          //     return Math.random() < 0.5 ? EnMechanicType.Ice : EnMechanicType.Brick;
          // } else {
          //     // Late-game: random among all three
          //     const rand = Math.random();
          //     if (rand < 0.33) return EnMechanicType.HighEnder;
          //     else if (rand < 0.66) return EnMechanicType.Ice;
          //     else return EnMechanicType.Brick;
          // }
        }

        /**
         * Decides how many turns (block throws) the player has before the next obstacle arrives,
         * based on the current index. The number of turns decreases as difficulty ramps up.
         */;
        _proto.getTurnsForIndex = function getTurnsForIndex(index) {
          if (index < 10) {
            // Early game: 12 down to ~10
            return 12 - Math.floor(index / 3); // e.g., indices 0..9 => 12..9
            // return 12 - Math.floor(index / 3); // e.g., indices 0..9 => 12..9
          } else if (index < 30) {
            // Slightly tighter: 10 down to ~7
            // e.g. scale index from 10..29 => 0..19 => turns 10..7
            var diff = index - 10;
            return Math.max(10 - Math.floor(diff / 4), 7);
          } else if (index < 60) {
            // 7 down to 5
            // e.g. scale index from 30..59 => 0..29 => turns 7..5
            var _diff = index - 30;
            return Math.max(7 - Math.floor(_diff / 10), 5);
          } else if (index < 80) {
            // 5 down to 3
            // e.g. scale index from 60..79 => 0..19 => turns 5..3
            var _diff2 = index - 60;
            return Math.max(5 - Math.floor(_diff2 / 7), 3);
          } else {
            // 3 down to 2
            // e.g. scale index from 80..99 => 0..19 => turns 3..2
            var _diff3 = index - 80;
            return Math.max(3 - Math.floor(_diff3 / 10), 2);
          }
        };
        return TurnManager;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TweenAnimations.ts", ['cc'], function (exports) {
  var cclegacy, _decorator, tween;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      tween = module.tween;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "a6fa7Gt6x1NeLk0LEt8caUL", "TweenAnimations", undefined);
      var ccclass = _decorator.ccclass;
      var TweenAnimations = exports('default', ccclass(_class = /*#__PURE__*/function () {
        function TweenAnimations() {}
        /**
         * Shake the node with a given intensity and duration.
         * @param intensity - The strength of the shake (in pixels).
         * @param duration - The duration of the shake (in seconds).
         */
        TweenAnimations.shake = function shake(intensity, duration, node) {
          if (intensity === void 0) {
            intensity = 2;
          }
          if (duration === void 0) {
            duration = 0.5;
          }
          var originalAngle = node.angle;

          // Create a shake effect using tween
          return tween(node).to(duration / 6, {
            angle: originalAngle + intensity
          }) // Move right
          .to(duration / 6, {
            angle: originalAngle - intensity
          }) // Move left
          .to(duration / 6, {
            angle: originalAngle + intensity
          }) // Move right
          .to(duration / 6, {
            angle: originalAngle - intensity
          }) // Move left
          .to(duration / 6, {
            angle: originalAngle + intensity
          }) // Move right
          .to(duration / 6, {
            angle: originalAngle
          }); // Return to the original position
        };

        return TweenAnimations;
      }()) || _class);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIButton.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Signal.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, _decorator, Node, Component, Signal;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      Signal = module.Signal;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "55e5f5nQ8dHiL5fPWjgdXbH", "UIButton", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UIButton = exports('UIButton', (_dec = ccclass("UIButton"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIButton, _Component);
        function UIButton() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.interactedEvent = new Signal();
          return _this;
        }
        var _proto = UIButton.prototype;
        _proto.start = function start() {
          this.node.on(Node.EventType.TOUCH_START, this.interact, this);
        };
        _proto.onDisable = function onDisable() {
          this.node.off(Node.EventType.TOUCH_START, this.interact, this);
        };
        _proto.interact = function interact() {
          console.log("interact");
          this.interactedEvent.trigger(this);
        };
        _createClass(UIButton, [{
          key: "InteractedEvent",
          get: function get() {
            return this.interactedEvent;
          }
        }]);
        return UIButton;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIButtonAudioPlayer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AppRoot.ts', './UIButton.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Component, AppRoot, UIButton;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      AppRoot = module.AppRoot;
    }, function (module) {
      UIButton = module.UIButton;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "146cdU9Cw9I+otUVSgpwCCT", "UIButtonAudioPlayer", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UIButtonAudioPlayer = exports('UIButtonAudioPlayer', (_dec = ccclass("UIButtonAudioPlayer"), _dec2 = property(UIButton), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIButtonAudioPlayer, _Component);
        function UIButtonAudioPlayer() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "button", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = UIButtonAudioPlayer.prototype;
        _proto.start = function start() {
          this.button.InteractedEvent.on(this.playButtonClick, this);
        };
        _proto.onDisable = function onDisable() {
          this.button.InteractedEvent.off(this.playButtonClick);
        };
        _proto.playButtonClick = function playButtonClick() {
          var audioClip = AppRoot.Instance.GameAssets.AudioAssets.buttonClick;
          AppRoot.Instance.AudioPlayer.playSound(audioClip);
        };
        return UIButtonAudioPlayer;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "button", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, _decorator, Label;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "258108Ah91D5L4G4FEfPTb2", "UIManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UIManager = exports('UIManager', (_dec = ccclass('UIManager'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function UIManager() {
          _initializerDefineProperty(this, "scoreLabel", _descriptor, this);
          _initializerDefineProperty(this, "highScoreLabel", _descriptor2, this);
          _initializerDefineProperty(this, "levelLabel", _descriptor3, this);
        }
        var _proto = UIManager.prototype;
        _proto.updateScore = function updateScore(currentScore, highScore) {
          if (this.scoreLabel) {
            this.scoreLabel.string = currentScore.toString();
          }
          if (this.highScoreLabel) {
            this.highScoreLabel.string = highScore.toString();
          }
        };
        _proto.updateLevel = function updateLevel(level) {
          if (this.levelLabel) {
            this.levelLabel.string = level.toString();
          }
        };
        return UIManager;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scoreLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "highScoreLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "levelLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UnitHealth.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Signal.ts'], function (exports) {
  var _createClass, cclegacy, Signal;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      Signal = module.Signal;
    }],
    execute: function () {
      cclegacy._RF.push({}, "149728dgAlNOYpvVTrhs6AR", "UnitHealth", undefined);
      var UnitHealth = exports('UnitHealth', /*#__PURE__*/function () {
        function UnitHealth(maxHealth) {
          this.healthPoints = void 0;
          this.maxHealthPoints = void 0;
          this.healthPointsChangeEvent = new Signal();
          this.maxHealthPoints = maxHealth;
          this.healthPoints = maxHealth;
        }
        var _proto = UnitHealth.prototype;
        _proto.heal = function heal(points) {
          this.healthPoints = Math.min(this.maxHealthPoints, this.healthPoints + points);
          this.healthPointsChangeEvent.trigger(points);
        };
        _proto.damage = function damage(points) {
          this.healthPoints -= points;
          this.healthPointsChangeEvent.trigger(-points);
        };
        _proto.setMaxHealth = function setMaxHealth(maxHealth) {
          this.maxHealthPoints = maxHealth;
        };
        _createClass(UnitHealth, [{
          key: "IsAlive",
          get: function get() {
            return 0 < this.healthPoints;
          }
        }, {
          key: "HealthPoints",
          get: function get() {
            return this.healthPoints;
          }
        }, {
          key: "MaxHealthPoints",
          get: function get() {
            return this.maxHealthPoints;
          }
        }, {
          key: "HealthPointsChangeEvent",
          get: function get() {
            return this.healthPointsChangeEvent;
          }
        }]);
        return UnitHealth;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UnitLevel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Signal.ts'], function (exports) {
  var _createClass, cclegacy, Signal;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      Signal = module.Signal;
    }],
    execute: function () {
      cclegacy._RF.push({}, "61e760eFahCzJkNuceEjdqz", "UnitLevel", undefined);
      var UnitLevel = exports('UnitLevel', /*#__PURE__*/function () {
        function UnitLevel(requiredXPs, xpMultiplier) {
          this.xp = 0;
          this.currentLevel = 0;
          this.levelUpEvent = new Signal();
          this.xpAddedEvent = new Signal();
          this.requiredXPs = requiredXPs;
          this.xpMultiplier = xpMultiplier;
        }
        var _proto = UnitLevel.prototype;
        _proto.addXp = function addXp(points) {
          this.xp += points * this.xpMultiplier;
          this.xpAddedEvent.trigger(this.xp);
          this.tryLevelUp();
        };
        _proto.tryLevelUp = function tryLevelUp() {
          if (this.requiredXPs.length <= this.currentLevel) return;
          if (this.xp < this.requiredXPs[this.currentLevel]) return;
          this.xp -= this.requiredXPs[this.currentLevel];
          this.currentLevel++;
          this.levelUpEvent.trigger(this.currentLevel);
          this.tryLevelUp();
        };
        _createClass(UnitLevel, [{
          key: "XP",
          get: function get() {
            return this.xp;
          }
        }, {
          key: "RequiredXP",
          get: function get() {
            return this.requiredXPs[this.currentLevel];
          }
        }, {
          key: "LevelUpEvent",
          get: function get() {
            return this.levelUpEvent;
          }
        }, {
          key: "XpAddedEvent",
          get: function get() {
            return this.xpAddedEvent;
          }
        }]);
        return UnitLevel;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UpgradeIcons.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      // import { Component, SpriteFrame, _decorator } from "cc";
      cclegacy._RF.push({}, "c397biITvtFvqyVIZApPuax", "UpgradeIcons", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UpgradeLevelPointUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "10d0fuUwd1E24b6fVo7KYFK", "UpgradeLevelPointUI", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UpgradeLevelPointUI = exports('UpgradeLevelPointUI', (_dec = ccclass("UpgradeLevelPointUI"), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UpgradeLevelPointUI, _Component);
        function UpgradeLevelPointUI() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "upgradedGraphics", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = UpgradeLevelPointUI.prototype;
        _proto.init = function init() {
          this.upgradedGraphics.active = false;
        };
        _proto.upgrade = function upgrade() {
          this.upgradedGraphics.active = true;
        };
        return UpgradeLevelPointUI;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "upgradedGraphics", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Upgrader.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "51a093X7GNA3aDOGhZjLxb6", "Upgrader", undefined);
      var Upgrader = exports('Upgrader', /*#__PURE__*/function () {
        function Upgrader(settings) {
          this.typeToAction = new Map();
          this.typeToLevel = new Map();
          this.typeToMaxLevel = new Map();
        }
        var _proto = Upgrader.prototype;
        _proto.upgradeSkill = function upgradeSkill(type) {
          if (!this.typeToAction.has(type)) throw new Error("Upgrade does not have " + type);
          if (this.isMaxLevel(type)) throw new Error("Upgrade is already at max level " + type);
          this.typeToAction.get(type)();
          var level = this.typeToLevel.get(type);
          this.typeToLevel.set(type, level + 1);
        };
        _proto.getAvailableUpgrades = function getAvailableUpgrades() {
          var availableUpgrades = new Set();
          for (var _iterator = _createForOfIteratorHelperLoose(this.typeToAction.keys()), _step; !(_step = _iterator()).done;) {
            var key = _step.value;
            if (!this.isMaxLevel(key)) {
              availableUpgrades.add(key);
            }
          }
          return availableUpgrades;
        };
        _proto.setTypeMaps = function setTypeMaps(upgradeType, action, maxLevel) {
          this.typeToAction.set(upgradeType, action);
          this.typeToLevel.set(upgradeType, 0);
          this.typeToMaxLevel.set(upgradeType, maxLevel);
        };
        _proto.isMaxLevel = function isMaxLevel(type) {
          return this.typeToMaxLevel.get(type) <= this.typeToLevel.get(type);
        };
        return Upgrader;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UpgradesModalWindow.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AppRoot.ts', './ModalWindow.ts', './UpgradeUI.ts', './UpgradeType.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, Node, Label, AudioClip, instantiate, AppRoot, ModalWindow, UpgradeUI, MetaUpgradeType;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Node = module.Node;
      Label = module.Label;
      AudioClip = module.AudioClip;
      instantiate = module.instantiate;
    }, function (module) {
      AppRoot = module.AppRoot;
    }, function (module) {
      ModalWindow = module.ModalWindow;
    }, function (module) {
      UpgradeUI = module.UpgradeUI;
    }, function (module) {
      MetaUpgradeType = module.MetaUpgradeType;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "854a4tmkIROzYFPAwDxL3/z", "UpgradesModalWindow", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UpgradesModalWindow = exports('UpgradesModalWindow', (_dec = ccclass("UpgradesModalWindow"), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(Label), _dec5 = property(AudioClip), _dec(_class = (_class2 = /*#__PURE__*/function (_ModalWindow) {
        _inheritsLoose(UpgradesModalWindow, _ModalWindow);
        function UpgradesModalWindow() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ModalWindow.call.apply(_ModalWindow, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "upgradeButtonPrefab", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "upgradeButtonParent", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "goldCoinsLabel", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "upgradeAudioClip", _descriptor4, _assertThisInitialized(_this));
          _this.typeToLevel = new Map();
          _this.typeToCosts = new Map();
          _this.typeToLevelKey = new Map();
          _this.typeToUpgradeUI = new Map();
          _this.userData = void 0;
          return _this;
        }
        var _proto = UpgradesModalWindow.prototype;
        _proto.setup = function setup() {
          this.userData = AppRoot.Instance.LiveUserData;
          var settings = AppRoot.Instance.Settings.metaUpgrades;
          this.createUpgradeButton(MetaUpgradeType.Health, settings.health, "healthLevel");
          this.createUpgradeButton(MetaUpgradeType.OverallDamage, settings.overallDamage, "overallDamageLevel");
          this.createUpgradeButton(MetaUpgradeType.ProjectilePiercing, settings.projectilePiercing, "projectilePiercingLevel");
          this.createUpgradeButton(MetaUpgradeType.MovementSpeed, settings.movementSpeed, "movementSpeedLevel");
          this.createUpgradeButton(MetaUpgradeType.XPGatherer, settings.xpGatherer, "xpGathererLevel");
          this.createUpgradeButton(MetaUpgradeType.GoldGatherer, settings.goldGatherer, "goldGathererLevel");
          this.goldCoinsLabel.string = this.userData.game.goldCoins.toString();
        };
        _proto.createUpgradeButton = function createUpgradeButton(upgradeType, upgradeSettings, levelKey) {
          var upgradeButton = instantiate(this.upgradeButtonPrefab);
          var upgradeUI = upgradeButton.getComponent(UpgradeUI);
          upgradeUI.init(upgradeType, upgradeSettings, this.userData.game.metaUpgrades[levelKey], AppRoot.Instance.TranslationData);
          // upgradeUI.InteractedEvent.on(this.tryUpgrade, this);
          upgradeButton.setParent(this.upgradeButtonParent);
          this.typeToLevel.set(upgradeType, this.userData.game.metaUpgrades[levelKey]);
          this.typeToCosts.set(upgradeType, upgradeSettings.costs);
          this.typeToLevelKey.set(upgradeType, levelKey);
          this.typeToUpgradeUI.set(upgradeType, upgradeUI);
        };
        _proto.tryUpgrade = function tryUpgrade(upgradeType) {
          console.log("Trying to upgrade " + upgradeType);
          var costs = this.typeToCosts.get(upgradeType);
          var currentLevel = this.typeToLevel.get(upgradeType);
          if (costs.length <= currentLevel) return; // already max level
          if (this.userData.game.goldCoins < costs[currentLevel]) return; // not enough gold

          AppRoot.Instance.AudioPlayer.playSound(this.upgradeAudioClip);
          this.userData.game.goldCoins -= costs[currentLevel];
          var level = ++this.userData.game.metaUpgrades[this.typeToLevelKey.get(upgradeType)];
          this.typeToUpgradeUI.get(upgradeType).updateLevel(level);
          this.typeToLevel.set(upgradeType, level);
          this.goldCoinsLabel.string = this.userData.game.goldCoins.toString();
          AppRoot.Instance.saveUserData();
        };
        return UpgradesModalWindow;
      }(ModalWindow), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "upgradeButtonPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "upgradeButtonParent", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "goldCoinsLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "upgradeAudioClip", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      var Empty = exports('Empty', function Empty() {});
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UpgradeType.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a481cMctrpIcbjX8VF4ikUK", "UpgradeType", undefined);
      var UpgradeType = exports('UpgradeType', /*#__PURE__*/function (UpgradeType) {
        UpgradeType["WeaponLength"] = "WEAPON_LENGTH";
        UpgradeType["WeaponDamage"] = "WEAPON_DAMAGE";
        UpgradeType["HorizontalProjectile"] = "HORIZONTAL_PROJECTILE";
        UpgradeType["DiagonalProjectile"] = "DIAGONAL_PROJECTILE";
        UpgradeType["HaloProjectlie"] = "HALO_PROJECTILE";
        UpgradeType["Regeneration"] = "REGENERATION";
        return UpgradeType;
      }({}));
      var MetaUpgradeType = exports('MetaUpgradeType', /*#__PURE__*/function (MetaUpgradeType) {
        MetaUpgradeType["Health"] = "META_HEALTH";
        MetaUpgradeType["OverallDamage"] = "META_OVERALL_DAMAGE";
        MetaUpgradeType["ProjectilePiercing"] = "META_PROJECTILE_PIERCING";
        MetaUpgradeType["MovementSpeed"] = "META_MOVEMENT_SPEED";
        MetaUpgradeType["XPGatherer"] = "META_XP_GATHERER";
        MetaUpgradeType["GoldGatherer"] = "META_GOLD_GATHERER";
        return MetaUpgradeType;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UpgradeUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AppRoot.ts', './Signal.ts', './UIButton.ts', './StringUtils.ts', './UpgradeLevelPointUI.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Prefab, Node, Label, Sprite, instantiate, Component, AppRoot, Signal, UIButton, formatString, UpgradeLevelPointUI;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Node = module.Node;
      Label = module.Label;
      Sprite = module.Sprite;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      AppRoot = module.AppRoot;
    }, function (module) {
      Signal = module.Signal;
    }, function (module) {
      UIButton = module.UIButton;
    }, function (module) {
      formatString = module.formatString;
    }, function (module) {
      UpgradeLevelPointUI = module.UpgradeLevelPointUI;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "76eda6MFrpILZH9KDOZFHWs", "UpgradeUI", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UpgradeUI = exports('UpgradeUI', (_dec = ccclass("UpgradeUI"), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Sprite), _dec9 = property(UIButton), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UpgradeUI, _Component);
        function UpgradeUI() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "levelPointPrefab", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "levelPointsParent", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "title", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "description", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cost", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maxLevel", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "icon", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "uiButton", _descriptor8, _assertThisInitialized(_this));
          _this.interactedEvent = new Signal();
          _this.upgradeType = void 0;
          _this.upgradeSettings = void 0;
          _this.translationData = void 0;
          _this.levelPointUIs = [];
          return _this;
        }
        var _proto = UpgradeUI.prototype;
        _proto.init = function init(upgradeType, upgradeSettings, level, translationData) {
          this.upgradeType = upgradeType;
          this.upgradeSettings = upgradeSettings;
          this.translationData = translationData;
          this.icon.spriteFrame = AppRoot.Instance.GameAssets.MetaUpgradeIcons.getIcon(upgradeType);
          this.title.string = "" + translationData[upgradeType + "_TITLE"];
          // this.uiButton.InteractedEvent.on(() => this.interactedEvent.trigger(upgradeType), this);

          for (var i = 0; i < this.upgradeSettings.bonuses.length; i++) {
            var node = instantiate(this.levelPointPrefab);
            node.setParent(this.levelPointsParent);
            var levelPointUI = node.getComponent(UpgradeLevelPointUI);
            levelPointUI.init();
            this.levelPointUIs.push(levelPointUI);
          }
          this.updateLevel(level);
        };
        _proto.updateLevel = function updateLevel(level) {
          for (var i = 0; i < this.levelPointUIs.length; i++) {
            if (i < level) {
              this.levelPointUIs[i].upgrade();
            }
          }
          if (level < this.upgradeSettings.bonuses.length) {
            this.maxLevel.node.active = false;
            this.description.string = formatString("" + this.translationData[this.upgradeType + "_DESC"], [this.upgradeSettings.bonuses[level].toString()]);
            this.cost.string = this.upgradeSettings.costs[level].toString();
          } else {
            // reached max level
            this.maxLevel.node.active = true;
            this.cost.node.active = false;
            this.description.node.active = false;
          }
        };
        _createClass(UpgradeUI, [{
          key: "InteractedEvent",
          get: function get() {
            return this.interactedEvent;
          }
        }]);
        return UpgradeUI;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "levelPointPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "levelPointsParent", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "title", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "description", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "cost", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "maxLevel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "icon", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "uiButton", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UserData.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7431f98SAxEdJQ0ZU7aChoI", "UserData", undefined);
      var UserData = exports('UserData', function UserData() {
        this.soundVolume = 1;
        this.musicVolume = 1;
        this.game = new GameData();
      });
      var GameData = exports('GameData', function GameData() {
        this.goldCoins = 0;
        this.metaUpgrades = new MetaUpgradesData();
        this.highscore = 0;
        this.maxLevelReached = 0;
      });
      var MetaUpgradesData = exports('MetaUpgradesData', function MetaUpgradesData() {
        this.healthLevel = 0;
        this.overallDamageLevel = 0;
        this.projectilePiercingLevel = 0;
        this.movementSpeedLevel = 0;
        this.xpGathererLevel = 0;
        this.goldGathererLevel = 0;
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/VecUtils.ts", ['cc'], function (exports) {
  var cclegacy, Vec3;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
    }],
    execute: function () {
      exports('getDirection', getDirection);
      cclegacy._RF.push({}, "06778nDdI9GQ4KvvTMhbu4w", "VecUtils", undefined);
      function getDirection(targetPosition, sourcePosition) {
        var direction = new Vec3();
        return Vec3.subtract(direction, targetPosition, sourcePosition).normalize();
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/VirtualJoystic.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _classPrivateFieldLooseBase, _classPrivateFieldLooseKey, cclegacy, _decorator, CCFloat, Node, Vec2, Vec3, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _classPrivateFieldLooseBase = module.classPrivateFieldLooseBase;
      _classPrivateFieldLooseKey = module.classPrivateFieldLooseKey;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      CCFloat = module.CCFloat;
      Node = module.Node;
      Vec2 = module.Vec2;
      Vec3 = module.Vec3;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _isUsingJoystic, _defaultPosition;
      cclegacy._RF.push({}, "a51b2i8TvBDJJf8RPlkzgh6", "VirtualJoystic", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var VirtualJoystic = exports('VirtualJoystic', (_dec = ccclass("VirtualJoystic"), _dec2 = property(CCFloat), _dec3 = property(Node), _dec(_class = (_class2 = (_isUsingJoystic = /*#__PURE__*/_classPrivateFieldLooseKey("isUsingJoystic"), _defaultPosition = /*#__PURE__*/_classPrivateFieldLooseKey("defaultPosition"), /*#__PURE__*/function (_Component) {
        _inheritsLoose(VirtualJoystic, _Component);
        function VirtualJoystic() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "maxDistance", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "knob", _descriptor2, _assertThisInitialized(_this));
          Object.defineProperty(_assertThisInitialized(_this), _isUsingJoystic, {
            writable: true,
            value: false
          });
          Object.defineProperty(_assertThisInitialized(_this), _defaultPosition, {
            writable: true,
            value: new Vec2()
          });
          return _this;
        }
        var _proto = VirtualJoystic.prototype;
        _proto.init = function init() {
          // input.on(Input.EventType.MOUSE_DOWN, this.activateMouseJoystic, this);
          // input.on(Input.EventType.MOUSE_UP, this.deactivateJoystic, this);
          // input.on(Input.EventType.MOUSE_MOVE, this.moveKnobMouse, this);

          // input.on(Input.EventType.TOUCH_START, this.activateTouchJoystic, this);
          // input.on(Input.EventType.TOUCH_END, this.deactivateJoystic, this);
          // input.on(Input.EventType.TOUCH_MOVE, this.moveKnobTouch, this);

          this.deactivateJoystic();
        };
        _proto.getAxis = function getAxis() {
          if (_classPrivateFieldLooseBase(this, _isUsingJoystic)[_isUsingJoystic]) {
            return new Vec2(this.knob.position.x / this.maxDistance, this.knob.position.y / this.maxDistance);
          } else {
            return new Vec2();
          }
        };
        _proto.activateTouchJoystic = function activateTouchJoystic(e) {
          this.activateJoystic(e.getUILocation());
        };
        _proto.activateMouseJoystic = function activateMouseJoystic(e) {
          console.log(e.getUILocation());
          this.activateJoystic(e.getUILocation());
        };
        _proto.activateJoystic = function activateJoystic(location) {
          _classPrivateFieldLooseBase(this, _isUsingJoystic)[_isUsingJoystic] = true;
          this.node.active = true;
          _classPrivateFieldLooseBase(this, _defaultPosition)[_defaultPosition] = location;
          this.node.setPosition(new Vec3(_classPrivateFieldLooseBase(this, _defaultPosition)[_defaultPosition].x, _classPrivateFieldLooseBase(this, _defaultPosition)[_defaultPosition].y, 0));
          this.knob.position = new Vec3();
        };
        _proto.deactivateJoystic = function deactivateJoystic() {
          _classPrivateFieldLooseBase(this, _isUsingJoystic)[_isUsingJoystic] = false;
          this.node.active = false;
        };
        _proto.moveKnobTouch = function moveKnobTouch(e) {
          this.moveKnob(e.getUILocation());
        };
        _proto.moveKnobMouse = function moveKnobMouse(e) {
          this.moveKnob(e.getUILocation());
        };
        _proto.moveKnob = function moveKnob(location) {
          if (!_classPrivateFieldLooseBase(this, _isUsingJoystic)[_isUsingJoystic]) return;
          var posDelta = location.subtract(_classPrivateFieldLooseBase(this, _defaultPosition)[_defaultPosition]);
          var x = posDelta.x;
          var y = posDelta.y;
          var length = Math.sqrt(Math.pow(posDelta.x, 2) + Math.pow(posDelta.y, 2));
          if (this.maxDistance < length) {
            var multiplier = this.maxDistance / length;
            x *= multiplier;
            y *= multiplier;
          }
          this.knob.position = new Vec3(x, y, 0);
        };
        return VirtualJoystic;
      }(Component)), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "maxDistance", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "knob", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});