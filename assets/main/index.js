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
        function BlockSpawner(blockPrefab, gameBoard, tileSprites) {
          this.blockPrefab = void 0;
          this.gameBoard = void 0;
          this.tileSprites = void 0;
          this.blockPrefab = blockPrefab;
          this.gameBoard = gameBoard;
          this.tileSprites = tileSprites;
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
            tilenumber: num
          });
          this.gameBoard.addChild(block);
          return block;
        };
        _proto.spawnUpcomingTile = function spawnUpcomingTile(upcomingNode) {
          var tile = this.spawnBlock(0, 0);
          tile.setPosition(upcomingNode.position);
          return tile;
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

System.register("chunks:///_virtual/GameBoardManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BlockSpawner.ts', './MatchChecker.ts', './TileItemUI.ts', './ScoreManager.ts', './GameModels.ts', './GridManager.ts', './TileAnimationManager.ts', './SerialisedAssets.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Prefab, Node, Button, Vec2, Vec3, Component, BlockSpawner, MatchChecker, TileItemUI, ScoreManager, PositionData, GridManager, TileAnimationManager, SerialisedAssets;
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
    }, function (module) {
      GridManager = module.GridManager;
    }, function (module) {
      TileAnimationManager = module.TileAnimationManager;
    }, function (module) {
      SerialisedAssets = module.SerialisedAssets;
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
          _this.gridManager = void 0;
          _this.animationManager = void 0;
          _this.uiManager = void 0;
          // private grid: Node[][] = [];
          _this.blockSpawner = void 0;
          _this.matchChecker = void 0;
          _this.nextTile = void 0;
          _this.bottomLeftTilePos = void 0;
          _this.positionData = void 0;
          _this.isBusy = false;
          return _this;
        }
        var _proto = GameBoardManager.prototype;
        _proto.Speed = function Speed() {
          return this.dropSpeed;
        };
        _proto.start = function start() {
          GameBoardManager.Instance = this;
          this.positionData = new PositionData(new Vec3(this.targetPositionLeftMostCol.position.x, this.targetPositionBottomRow.position.y, 0), this.tileItemSize.x, this.tileItemSize.y, this.tileSpacing, this.tileSpacingY);
          this.gridManager = new GridManager(this.gridSize, this.positionData);
          this.blockSpawner = new BlockSpawner(this.blockPrefab, this.gameBoard, this.tileSprites);
          this.animationManager = new TileAnimationManager();
          this.bottomLeftTilePos = new Vec3(this.targetPositionLeftMostCol.position.x, this.targetPositionBottomRow.position.y, 0); // Adjust based on your grid cell size
          this.matchChecker = new MatchChecker(this.gridManager, this.scoreManager, this.positionData);
          this.playBtn.node.parent.active = true;
        };
        _proto.onClickPlayBtn = function onClickPlayBtn() {
          this.playBtn.node.parent.active = false;
          this.gridManager.createGrid();
          this.spawnInitialBlocks();
          this.spawnUpcomingTile();
          this.isBusy = false;
        };
        _proto.onClickColumnSelected = function onClickColumnSelected(event, customEventData) {
          console.log(customEventData);
          if (this.isBusy) return;
          this.isBusy = true;
          this.onColumnSelected(Number(customEventData));
          this.scoreManager.updateThrows();
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
          if (row === -1) {
            this.isBusy = false;
            this.playBtn.node.active = true;
            return;
          }
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
                  this.playBtn.node.parent.active = true;
                  return _context4.abrupt("return");
                case 11:
                  this.isBusy = false;
                case 12:
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
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GridManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy, _decorator, Vec3;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec3 = module.Vec3;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "0ca57HFFldI5rvzxAd1hTNf", "GridManager", undefined);
      var ccclass = _decorator.ccclass;
      var GridManager = exports('GridManager', (_dec = ccclass('GridManager'), _dec(_class = /*#__PURE__*/function () {
        function GridManager(gridSize, positionData) {
          this.grid = void 0;
          this.gridSize = void 0;
          this.positionData = void 0;
          this.gridSize = gridSize;
          this.positionData = positionData;
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

System.register("chunks:///_virtual/main", ['./GameBoardManager.ts', './BlockSpawner.ts', './GridManager.ts', './InputHandler.ts', './MatchChecker.ts', './MatchManager.ts', './TileAnimationManager.ts', './UIManager.ts', './ScoreManager.ts', './SerialisedAssets.ts', './TileItemUI.ts', './GameModels.ts', './LevelCompleteScreen.ts', './AssetManagerWrapper.ts', './ConsoleLogger.ts', './ISignal.ts', './Signal.ts', './RuntimeAssetKeeper.ts', './TweenAnimations.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
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
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;
      cclegacy._RF.push({}, "a6d2duU6DlKsK8JhcR5AY+C", "SerialisedAssets", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SerialisedAssets = exports('SerialisedAssets', (_dec = ccclass('SerialisedAssets'), _dec2 = property(SpriteFrame), _dec3 = property(SpriteFrame), _dec4 = property(SpriteFrame), _dec5 = property(SpriteFrame), _dec6 = property(SpriteFrame), _dec7 = property(SpriteFrame), _dec8 = property(SpriteFrame), _dec9 = property(SpriteFrame), _dec10 = property(SpriteFrame), _dec11 = property(SpriteFrame), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SerialisedAssets, _Component);
        function SerialisedAssets() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "sevenSprite", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sixSprite", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fiveSprite", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fourSprite", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "threeSprite", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "twoSprite", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "oneSprite", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "IceSprite", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "crackedIceSprite", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "blockerprite", _descriptor10, _assertThisInitialized(_this));
          _this.typeToIcon = new Map();
          return _this;
        }
        var _proto = SerialisedAssets.prototype;
        _proto.onEnable = function onEnable() {
          this.init();
        };
        _proto.init = function init() {
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
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sevenSprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sixSprite", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "fiveSprite", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "fourSprite", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "threeSprite", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "twoSprite", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "oneSprite", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "IceSprite", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "crackedIceSprite", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "blockerprite", [_dec11], {
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