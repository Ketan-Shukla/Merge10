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

System.register("chunks:///_virtual/BlockSpawner.ts", ['cc', './TileItemUI.ts'], function (exports) {
  var cclegacy, _decorator, instantiate, TileItemUI;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      instantiate = module.instantiate;
    }, function (module) {
      TileItemUI = module.TileItemUI;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "aa257jxQllMHoFc0PQUlplH", "BlockSpawner", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BlockSpawner = exports('default', ccclass(_class = /*#__PURE__*/function () {
        function BlockSpawner(blockPrefab, gameBoard) {
          this.blockPrefab = void 0;
          this.gameBoard = void 0;
          this.blockPrefab = blockPrefab;
          this.gameBoard = gameBoard;
        }
        var _proto = BlockSpawner.prototype;
        _proto.spawnBlock = function spawnBlock(r, c) {
          var block = instantiate(this.blockPrefab);
          var randomNumber = Math.floor(Math.random() * 7) + 1;
          block.getComponent(TileItemUI).init({
            row: r,
            col: c,
            tilenumber: randomNumber
          });
          this.gameBoard.addChild(block);
          return block;
        };
        _proto.spawnBlockWithNum = function spawnBlockWithNum(r, c, num) {
          var block = instantiate(this.blockPrefab);
          block.getComponent(TileItemUI).init({
            row: r,
            col: c,
            tilenumber: num
          });
          this.gameBoard.addChild(block);
          return block;
        };
        return BlockSpawner;
      }()) || _class);
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

System.register("chunks:///_virtual/GameBoardManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BlockSpawner.ts', './MatchChecker.ts', './ConsoleLogger.ts', './TileItemUI.ts', './ScoreManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Prefab, Node, Button, Vec2, Component, Vec3, BlockSpawner, MatchChecker, ConsoleLogger, TileItemUI, ScoreManager;
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
      Button = module.Button;
      Vec2 = module.Vec2;
      Component = module.Component;
      Vec3 = module.Vec3;
    }, function (module) {
      BlockSpawner = module.default;
    }, function (module) {
      MatchChecker = module.default;
    }, function (module) {
      ConsoleLogger = module.default;
    }, function (module) {
      TileItemUI = module.TileItemUI;
    }, function (module) {
      ScoreManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;
      cclegacy._RF.push({}, "82f31CwLepDy4SyiPOlUCRP", "GameBoardManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GameBoardManager = exports('default', (_dec = property(Prefab), _dec2 = property(Number), _dec3 = property(Number), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Button), _dec9 = property(Vec2), _dec10 = property(ScoreManager), ccclass(_class = (_class2 = /*#__PURE__*/function (_Component) {
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
          _initializerDefineProperty(_this, "gameBoard", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "targetPositionBottomRow", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "targetPositionLeftMostCol", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "upcomingTileNode", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "playBtn", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tileItemSize", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scoreManager", _descriptor10, _assertThisInitialized(_this));
          _this.grid = [];
          _this.blockSpawner = void 0;
          _this.inputHandler = void 0;
          _this.matchChecker = void 0;
          _this.nextTile = void 0;
          return _this;
        }
        var _proto = GameBoardManager.prototype;
        /*
        create game states 
        -> Initalizing
        -> 
         */
        _proto.start = function start() {
          this.blockSpawner = new BlockSpawner(this.blockPrefab, this.gameBoard);
          // this.inputHandler = new InputHandler(this.gridSize, this.gameBoard, this.onColumnSelected.bind(this));
          this.matchChecker = new MatchChecker(this.grid, this.scoreManager);
          this.playBtn.node.parent.active = true;
        };
        _proto.onClickPlayBtn = function onClickPlayBtn() {
          this.playBtn.node.parent.active = false;
          this.createGrid();
          this.spawnInitialBlocks();
          this.spawnUpcomingTile();
        };
        _proto.spawnUpcomingTile = function spawnUpcomingTile() {
          this.nextTile = this.blockSpawner.spawnBlock(0, 0);
          this.nextTile.setPosition(this.upcomingTileNode.position);
        };
        _proto.createGrid = function createGrid() {
          for (var i = 0; i < this.gridSize; i++) {
            this.grid[i] = [];
            for (var j = 0; j < this.gridSize; j++) {
              this.grid[i][j] = null;
            }
          }
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
        _proto.spawnBlockAtRandomColumn = function spawnBlockAtRandomColumn() {
          var column = this.getRandomColumn();
          var row = this.findBottommostEmptyRow(column);
          if (row === -1) {
            ConsoleLogger.instance.info("All columns are full!");
            return;
          }
          this.spawnBlockSpecifiedPosition(row, column, this.blockSpawner.spawnBlock(row, column), true);
        };
        _proto.spawnBlockSpecifiedPosition = /*#__PURE__*/function () {
          var _spawnBlockSpecifiedPosition = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(row, column, block, skipAnim) {
            var targetPosition, prm;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (skipAnim === void 0) {
                    skipAnim = false;
                  }
                  this.grid[row][column] = block;
                  block.setPosition(this.upcomingTileNode.position);
                  // Move the block to its target position
                  targetPosition = new Vec3(this.targetPositionLeftMostCol.position.x + (column * this.tileItemSize.x + this.tileSpacing), this.targetPositionBottomRow.position.y + (row * this.tileItemSize.y + this.tileSpacing), 0); // Adjust based on your grid cell size
                  // block.getComponent(TileItemUI).moveToPosition(targetPosition);
                  block.setPosition(new Vec3(targetPosition.x, this.upcomingTileNode.position.y, this.upcomingTileNode.position.z));
                  if (!(skipAnim == true)) {
                    _context.next = 9;
                    break;
                  }
                  block.setPosition(targetPosition);
                  _context.next = 12;
                  break;
                case 9:
                  prm = new Promise(function (resolve, reject) {
                    block.getComponent(TileItemUI).moveToPosition(targetPosition).call(function () {
                      return resolve();
                    }).start();
                  });
                  _context.next = 12;
                  return prm;
                case 12:
                  this.grid = this.matchChecker.checkMatches(this.grid);
                  this.spawnUpcomingTile();
                case 14:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function spawnBlockSpecifiedPosition(_x, _x2, _x3, _x4) {
            return _spawnBlockSpecifiedPosition.apply(this, arguments);
          }
          return spawnBlockSpecifiedPosition;
        }();
        _proto.getRandomColumn = function getRandomColumn() {
          return Math.floor(Math.random() * this.gridSize);
        };
        _proto.findBottommostEmptyRow = function findBottommostEmptyRow(startColumn) {
          var column = startColumn;
          var attempts = 0;
          while (attempts < this.gridSize) {
            for (var row = 0; row < this.gridSize; row++) {
              if (!this.grid[row][column]) {
                return row;
              }
            }
            column = (column + 1) % this.gridSize;
            if (column == this.gridSize) {
              column = 0;
            }
            attempts++;
          }
          return -1; // All columns are full
        };

        _proto.findIfValidEmptyRowExists = function findIfValidEmptyRowExists(startColumn) {
          var column = startColumn;
          for (var row = 0; row < this.gridSize; row++) {
            if (!this.grid[row][column]) {
              return row;
            }
          }
          return -1; // All rows are full
        };

        _proto.onColumnSelected = function onColumnSelected(column) {
          var row = this.findIfValidEmptyRowExists(column);
          if (row === -1) {
            this.playBtn.node.active = true;
            return;
          }
          this.nextTile.getComponent(TileItemUI).SetRowCol(row, column);
          this.spawnBlockSpecifiedPosition(row, column, this.nextTile);
        };
        _proto.onClickColumnSelected = function onClickColumnSelected(event, customEventData) {
          console.log(customEventData);
          this.onColumnSelected(Number(customEventData));
          this.scoreManager.updateThrows();
        };
        _proto.getLowestEmptyRow = function getLowestEmptyRow(column) {
          for (var row = 0; row < this.gridSize; row++) {
            if (!this.grid[row][column]) {
              return row;
            }
          }
          return -1;
        };
        return GameBoardManager;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "blockPrefab", [_dec], {
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
          return 7;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "tileSpacing", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "gameBoard", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "targetPositionBottomRow", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "targetPositionLeftMostCol", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "upcomingTileNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "playBtn", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "tileItemSize", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec2(113, 117);
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "scoreManager", [_dec10], {
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

System.register("chunks:///_virtual/GameModels.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ae8f2eelOFL9ZuSj14wdVRM", "GameModels", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/InputHandler.ts", ['cc'], function (exports) {
  var cclegacy, _decorator, Node, view;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
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
          this.gridTouchNode.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
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

System.register("chunks:///_virtual/LevelCompleteScreen.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Component;
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
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "a275eJ8Jj1HW5YVy6roQLDX", "LevelCompleteScreen", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LevelCompleteScreen = exports('LevelCompleteScreen', (_dec = ccclass('LevelCompleteScreen'), _dec2 = property(Label), _dec3 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LevelCompleteScreen, _Component);
        function LevelCompleteScreen() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "currentScoreLabel", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "highScoreLabel", _descriptor2, _assertThisInitialized(_this));
          _this.scoreManager = null;
          _this.highScoreOld = 0;
          return _this;
        }
        var _proto = LevelCompleteScreen.prototype;
        _proto.init = function init(scoreManager) {
          this.scoreManager = scoreManager;
        };
        _proto.start = function start() {};
        _proto.onEnable = function onEnable() {
          this.updateUI();
        };
        _proto.updateUI = function updateUI() {
          if (this.scoreManager.getScore() > 0) {
            this.currentScoreLabel.node.active = true;
          } else {
            this.currentScoreLabel.node.active = false;
          }
          if (this.scoreManager.getHighScore() > 0) {
            this.highScoreLabel.node.active = true;
          } else {
            this.highScoreLabel.node.active = false;
          }
        };
        _proto.update = function update(deltaTime) {};
        return LevelCompleteScreen;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "currentScoreLabel", [_dec2], {
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
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./GameBoardManager.ts', './BlockSpawner.ts', './InputHandler.ts', './MatchChecker.ts', './ScoreManager.ts', './TileItemUI.ts', './GameModels.ts', './LevelCompleteScreen.ts', './AssetManagerWrapper.ts', './ConsoleLogger.ts', './ISignal.ts', './Signal.ts', './TweenAnimations.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/MatchChecker.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Signal.ts', './TileItemUI.ts'], function (exports) {
  var _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Signal, TileItemUI;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      Signal = module.Signal;
    }, function (module) {
      TileItemUI = module.TileItemUI;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "42323htlf9K0Jl18bP/rHmD", "MatchChecker", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var MatchChecker = exports('default', ccclass(_class = /*#__PURE__*/function () {
        function MatchChecker(grid, scoreManager) {
          this.grid = void 0;
          this.onTileMerged = new Signal();
          this.scoreManager = void 0;
          this.grid = grid;
          this.scoreManager = scoreManager;
        }
        var _proto = MatchChecker.prototype;
        _proto.checkMatches = function checkMatches(grid) {
          this.grid = grid;
          for (var row = 0; row < this.grid.length; row++) {
            this.checkRow(row);
          }
          for (var col = 0; col < this.grid[0].length; col++) {
            this.checkColumn(col);
          }
          return this.grid;
        };
        _proto.checkRow = function checkRow(row) {
          var sum = 0;
          var matchedBlocks = [];
          for (var col = 0; col < this.grid[row].length; col++) {
            var block = this.grid[row][col];
            if (!block) {
              sum = 0;
              matchedBlocks = [];
              continue;
            }
            var tileItem = block.getComponent(TileItemUI);
            var number = tileItem.TileNum;
            if (matchedBlocks.length === 0) {
              sum = number;
              matchedBlocks.push(block);
            } else {
              sum += number;
              matchedBlocks.push(block);
            }

            // If we found a sum of 10 or matching numbers, remove them
            if (sum === 10) {
              this.removeMatchedBlocks(matchedBlocks);
              sum = 0;
              matchedBlocks = [];
            } else if (matchedBlocks.length > 1 && number === matchedBlocks[matchedBlocks.length - 2].getComponent(TileItemUI).TileNum) {
              this.removeMatchedBlocks([block, matchedBlocks[matchedBlocks.length - 2]]);
              sum = 0;
              matchedBlocks = [];
            }
          }
        };
        _proto.checkColumn = function checkColumn(col) {
          var sum = 0;
          var matchedBlocks = [];
          for (var row = 0; row < this.grid.length; row++) {
            var block = this.grid[row][col];
            if (!block) {
              sum = 0;
              matchedBlocks = [];
              continue;
            }
            var tileItem = block.getComponent(TileItemUI);
            var number = tileItem.TileNum;
            if (matchedBlocks.length === 0) {
              sum = number;
            } else {
              sum += number;
            }
            matchedBlocks.push(block);

            // If we found a sum of 10, remove all blocks contributing to it
            if (sum === 10) {
              this.removeMatchedBlocks(matchedBlocks);
              sum = 0;
              matchedBlocks = [];
            }
            // If last two numbers in matchedBlocks are equal, remove them
            else if (matchedBlocks.length > 1 && number === matchedBlocks[matchedBlocks.length - 2].getComponent(TileItemUI).TileNum) {
              this.removeMatchedBlocks([block, matchedBlocks[matchedBlocks.length - 2]]);
              sum -= number + matchedBlocks[matchedBlocks.length - 2].getComponent(TileItemUI).TileNum;
              sum = sum < 0 ? 0 : sum;
              matchedBlocks.pop();
              matchedBlocks.pop();
            }
          }
        };
        _proto.removeMatchedBlocks = /*#__PURE__*/function () {
          var _removeMatchedBlocks = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(blocks) {
            var cleanAnim, scoreToAdd, i, block, tileItem;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  cleanAnim = [];
                  scoreToAdd = blocks.length * 5;
                  for (i = 0; i < blocks.length; i++) {
                    block = blocks[i];
                    tileItem = block.getComponent(TileItemUI);
                    cleanAnim.push(tileItem.destroyTile());
                    this.grid[tileItem.Row][tileItem.Col] = null;
                    // Show tooltip for score popup
                    this.scoreManager.showScoreTooltip(block, 5);
                  }
                  _context.next = 5;
                  return Promise.all(cleanAnim);
                case 5:
                  this.scoreManager.addScore(scoreToAdd);
                case 6:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function removeMatchedBlocks(_x) {
            return _removeMatchedBlocks.apply(this, arguments);
          }
          return removeMatchedBlocks;
        }();
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
          _this.highScoreKey = "highScore";
          return _this;
        }
        var _proto = ScoreManager.prototype;
        _proto.start = function start() {
          this.loadhighScore();
          this.updateUI();
        };
        _proto.loadhighScore = function loadhighScore() {
          var savedhighScore = this.loadHighScore();
          this.savedHighScore = savedhighScore;
          this.highScore = savedhighScore ? savedhighScore : 0;
          this.throwCounter = 10;
          this.levelCounter = 1;
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

System.register("chunks:///_virtual/TileItemUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Signal.ts', './ConsoleLogger.ts', './TweenAnimations.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _createClass, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, Button, tween, Component, Signal, ConsoleLogger, TweenAnimations;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Button = module.Button;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      Signal = module.Signal;
    }, function (module) {
      ConsoleLogger = module.default;
    }, function (module) {
      TweenAnimations = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "f7c88RVshdAqZbpSaN40N4d", "TileItemUI", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var TileItemUI = exports('TileItemUI', (_dec = ccclass('TileItemUI'), _dec2 = property(Label), _dec3 = property(Button), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TileItemUI, _Component);
        function TileItemUI() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "numberText", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn", _descriptor2, _assertThisInitialized(_this));
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
                  return this.playDestoryAnim();
                case 2:
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
        _proto.playDestoryAnim = /*#__PURE__*/function () {
          var _playDestoryAnim = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _this2 = this;
            var prm;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  //play destory anim
                  prm = new Promise(function (resolve, reject) {
                    TweenAnimations.shake(30, 0.5, _this2.node).call(function () {
                      return resolve();
                    }).start();
                  });
                  _context2.next = 3;
                  return prm;
                case 3:
                  this.node.active = false;
                  this.destroy();
                case 5:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function playDestoryAnim() {
            return _playDestoryAnim.apply(this, arguments);
          }
          return playDestoryAnim;
        }();
        _proto.moveToPosition = function moveToPosition(position) {
          var _this3 = this;
          return tween(this.node).to(1, {
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
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
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