var _pj;

var INDEX, OUTPUT, POS, TOKENS, TOKENS_CAPS, USER_INPUT, clear_func;

function _pj_snippets(container) {
  function in_es6(left, right) {
    if (right instanceof Array || typeof right === "string") {
      return right.indexOf(left) > -1;
    } else {
      if (right instanceof Map || right instanceof Set || right instanceof WeakMap || right instanceof WeakSet) {
        return right.has(left);
      } else {
        return left in right;
      }
    }
  }

  container["in_es6"] = in_es6;
  return container;
}

_pj = {};

_pj_snippets(_pj)

TOKENS = "abcdefghijklmnopqrstuvwxyz";
TOKENS_CAPS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function Clear(INDEX) {
  var OUTPUT_C;
  OUTPUT_C = "";

  if (POS - INDEX > 7) {
    OUTPUT_C += "+x";
    INDEX += 10;

    if (POS - INDEX > 3) {
      OUTPUT_C += "+v";
      INDEX += 5;

      if (POS - INDEX > 0) {
        for (var i = 0, _pj_a = POS - INDEX; i < _pj_a; i += 1) {
          OUTPUT_C += "++";
          INDEX += 1;
        }
      } else {
        if (POS - INDEX < 0) {
          for (var i = 0, _pj_a = Math.abs(POS - INDEX); i < _pj_a; i += 1) {
            OUTPUT_C += "--";
            INDEX -= 1;
          }
        }
      }
    } else {
      if (POS - INDEX < -3) {
        OUTPUT_C += "-v";
        INDEX -= 5;

        if (POS - INDEX > 0) {
          for (var i = 0, _pj_a = POS - INDEX; i < _pj_a; i += 1) {
            OUTPUT_C += "++";
            INDEX += 1;
          }
        } else {
          if (POS - INDEX < 0) {
            for (var i = 0, _pj_a = Math.abs(POS - INDEX); i < _pj_a; i += 1) {
              OUTPUT_C += "--";
              INDEX -= 1;
            }
          }
        }
      } else {
        if (POS - INDEX > 0) {
          for (var i = 0, _pj_a = POS - INDEX; i < _pj_a; i += 1) {
            OUTPUT_C += "++";
            INDEX += 1;
          }
        } else {
          if (POS - INDEX < 0) {
            for (var i = 0, _pj_a = Math.abs(POS - INDEX); i < _pj_a; i += 1) {
              OUTPUT_C += "--";
              INDEX -= 1;
            }
          }
        }
      }
    }
  } else {
    if (POS - INDEX > 3) {
      OUTPUT_C += "+v";
      INDEX += 5;

      if (POS - INDEX > 0) {
        for (var i = 0, _pj_a = POS - INDEX; i < _pj_a; i += 1) {
          OUTPUT_C += "++";
          INDEX += 1;
        }
      } else {
        if (POS - INDEX < 0) {
          for (var i = 0, _pj_a = Math.abs(POS - INDEX); i < _pj_a; i += 1) {
            OUTPUT_C += "--";
            INDEX -= 1;
          }
        }
      }
    } else {
      if (POS - INDEX > 0) {
        for (var i = 0, _pj_a = POS - INDEX; i < _pj_a; i += 1) {
          OUTPUT_C += "++";
          INDEX += 1;
        }
      }
    }
  }

  return [OUTPUT_C, INDEX];
}

const copyButton = document.getElementById("copy");

function run() {
  USER_INPUT = String(document.getElementById("codeInput").innerText);
  console.log(USER_INPUT);

  USER_TOKENS = USER_INPUT.split(/(\d|\D)/);

  for(let i = 0; i < USER_TOKENS.length; i++){
    USER_TOKENS = USER_TOKENS.filter(token => token !== "");
  }

  OUTPUT = "";
  INDEX = 0;
  for (var token, _pj_c = 0, _pj_a = USER_TOKENS, _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
    token = _pj_a[_pj_c];
  
    if (token === "0") {
      OUTPUT += "n(++--)";
    } else {
      if (token === "1") {
        OUTPUT += "n(++)";
      } else {
        if (token === "2") {
          OUTPUT += "n(++++)";
        } else {
          if (token === "3") {
            OUTPUT += "n(++++++)";
          } else {
            if (token === "4") {
              OUTPUT += "n(+v--)";
            } else {
              if (token === "5") {
                OUTPUT += "n(+v)";
              } else {
                if (token === "6") {
                  OUTPUT += "n(+v++)";
                } else {
                  if (token === "7") {
                    OUTPUT += "n(+v++++)";
                  } else {
                    if (token === "8") {
                      OUTPUT += "n(+v++++++)";
                    } else {
                      if (token === "9") {
                        OUTPUT += "n(+v++++++++)";
                      } else {
                        if (token === "_") {
                          OUTPUT += "s(++--)";
                        } else {
                          if (token === ".") {
                            OUTPUT += "s(++)";
                          } else {
                            if (token === "!") {
                              OUTPUT += "s(++++)";
                            } else {
                              if (token === "?") {
                                OUTPUT += "s(++++++)";
                              } else {
                                if (token === ",") {
                                  OUTPUT += "s(+v--)";
                                } else {
                                  if (token === ":") {
                                    OUTPUT += "s(+v)";
                                  } else {
                                    if (token === "(") {
                                      OUTPUT += "s(+v++)";
                                    } else {
                                      if (token === ")") {
                                        OUTPUT += "s(+v++++)";
                                      } else {
                                        if (token === "@") {
                                          OUTPUT += "s(+v++++++)";
                                        } else {
                                          if (token === "#") {
                                            OUTPUT += "s(+v++++++++)";
                                          } else {
                                            if (token === "$") {
                                              OUTPUT += "m(++--)";
                                            } else {
                                              if (token === "+") {
                                                OUTPUT += "m(++)";
                                              } else {
                                                if (token === "-") {
                                                  OUTPUT += "m(++++)";
                                                } else {
                                                  if (token === "*") {
                                                    OUTPUT += "m(++++++)";
                                                  } else {
                                                    if (token === "/") {
                                                      OUTPUT += "m(+v--)";
                                                    } else {
                                                      if (token === "=") {
                                                        OUTPUT += "m(+v)";
                                                      } else {
                                                        if (token === "%") {
                                                          OUTPUT += "m(+v++)";
                                                        } else {
                                                          if (token === "^") {
                                                            OUTPUT += "m(+v++++)";
                                                          } else {
                                                            if (token === "<") {
                                                              OUTPUT += "m(+v++++++)";
                                                            } else {
                                                              if (token === ">") {
                                                                OUTPUT += "m(+v++++++++)";
                                                              } else {
                                                                if (token === "\n") {
                                                                  INDEX = 0;
                                                                  OUTPUT += "\n";
                                                                } else {
                                                                  if (_pj.in_es6(token, TOKENS)) {
                                                                    POS = TOKENS.indexOf(token) + 1;
  
                                                                    if ((token === "a" || token === "e" || token === "j" || token === "t") && INDEX !== 0) {
                                                                      OUTPUT += "c";
                                                                      INDEX = 0;
                                                                      clear_func = new Clear(INDEX);
                                                                      OUTPUT += new Clear(INDEX)[0].toString();
                                                                      INDEX = clear_func[1];
                                                                    } else {
                                                                      if (POS - INDEX > 0) {
                                                                        if (POS < POS - INDEX) {
                                                                          OUTPUT += "c";
                                                                          INDEX = 0;
                                                                          clear_func = new Clear(INDEX);
                                                                          OUTPUT += new Clear(INDEX)[0].toString();
                                                                          INDEX = clear_func[1];
                                                                        }
                                                                      } else {
                                                                        if (POS - INDEX < 0) {
                                                                          if (0 - POS > POS - INDEX) {
                                                                            OUTPUT += "c";
                                                                            INDEX = 0;
                                                                            clear_func = new Clear(INDEX);
                                                                            OUTPUT += new Clear(INDEX)[0].toString();
                                                                            INDEX = clear_func[1];
                                                                          }
                                                                        }
                                                                      }
                                                                    }
  
                                                                    if (POS - INDEX >= 20 || POS - INDEX > 17) {
                                                                      OUTPUT += "+t";
                                                                      INDEX += 20;
  
                                                                      if (POS - INDEX > 3) {
                                                                        OUTPUT += "+v";
                                                                        INDEX += 5;
  
                                                                        if (POS - INDEX > 0) {
                                                                          for (var i = 0, _pj_d = POS - INDEX; i < _pj_d; i += 1) {
                                                                            OUTPUT += "++";
                                                                            INDEX += 1;
                                                                          }
                                                                        } else {
                                                                          if (POS - INDEX < 0) {
                                                                            for (var i = 0, _pj_d = Math.abs(POS - INDEX); i < _pj_d; i += 1) {
                                                                              OUTPUT += "--";
                                                                              INDEX -= 1;
                                                                            }
                                                                          }
                                                                        }
                                                                      } else {
                                                                        if (POS - INDEX < -3) {
                                                                          OUTPUT += "-v";
                                                                          INDEX -= 5;
  
                                                                          if (POS - INDEX > 0) {
                                                                            for (var i = 0, _pj_d = POS - INDEX; i < _pj_d; i += 1) {
                                                                              OUTPUT += "++";
                                                                              INDEX += 1;
                                                                            }
                                                                          } else {
                                                                            if (POS - INDEX < 0) {
                                                                              for (var i = 0, _pj_d = Math.abs(POS - INDEX); i < _pj_d; i += 1) {
                                                                                OUTPUT += "--";
                                                                                INDEX -= 1;
                                                                              }
                                                                            }
                                                                          }
                                                                        } else {
                                                                          if (POS - INDEX > 0) {
                                                                            for (var i = 0, _pj_d = POS - INDEX; i < _pj_d; i += 1) {
                                                                              OUTPUT += "++";
                                                                              INDEX += 1;
                                                                            }
                                                                          } else {
                                                                            if (POS - INDEX < 0) {
                                                                              for (var i = 0, _pj_d = Math.abs(POS - INDEX); i < _pj_d; i += 1) {
                                                                                OUTPUT += "--";
                                                                                INDEX -= 1;
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    } else {
                                                                      if (POS - INDEX > 7) {
                                                                        OUTPUT += "+x";
                                                                        INDEX += 10;
  
                                                                        if (POS - INDEX > 3) {
                                                                          OUTPUT += "+v";
                                                                          INDEX += 5;
  
                                                                          if (POS - INDEX > 0) {
                                                                            for (var i = 0, _pj_d = POS - INDEX; i < _pj_d; i += 1) {
                                                                              OUTPUT += "++";
                                                                              INDEX += 1;
                                                                            }
                                                                          } else {
                                                                            if (POS - INDEX < 0) {
                                                                              for (var i = 0, _pj_d = Math.abs(POS - INDEX); i < _pj_d; i += 1) {
                                                                                OUTPUT += "--";
                                                                                INDEX -= 1;
                                                                              }
                                                                            }
                                                                          }
                                                                        } else {
                                                                          if (POS - INDEX < -3) {
                                                                            OUTPUT += "-v";
                                                                            INDEX -= 5;
  
                                                                            if (POS - INDEX > 0) {
                                                                              for (var i = 0, _pj_d = POS - INDEX; i < _pj_d; i += 1) {
                                                                                OUTPUT += "++";
                                                                                INDEX += 1;
                                                                              }
                                                                            } else {
                                                                              if (POS - INDEX < 0) {
                                                                                for (var i = 0, _pj_d = Math.abs(POS - INDEX); i < _pj_d; i += 1) {
                                                                                  OUTPUT += "--";
                                                                                  INDEX -= 1;
                                                                                }
                                                                              }
                                                                            }
                                                                          } else {
                                                                            if (POS - INDEX > 0) {
                                                                              for (var i = 0, _pj_d = POS - INDEX; i < _pj_d; i += 1) {
                                                                                OUTPUT += "++";
                                                                                INDEX += 1;
                                                                              }
                                                                            } else {
                                                                              if (POS - INDEX < 0) {
                                                                                for (var i = 0, _pj_d = Math.abs(POS - INDEX); i < _pj_d; i += 1) {
                                                                                  OUTPUT += "--";
                                                                                  INDEX -= 1;
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      } else {
                                                                        if (POS - INDEX > 3) {
                                                                          OUTPUT += "+v";
                                                                          INDEX += 5;
  
                                                                          if (POS - INDEX > 0) {
                                                                            for (var i = 0, _pj_d = POS - INDEX; i < _pj_d; i += 1) {
                                                                              OUTPUT += "++";
                                                                              INDEX += 1;
                                                                            }
                                                                          } else {
                                                                            if (POS - INDEX < 0) {
                                                                              for (var i = 0, _pj_d = Math.abs(POS - INDEX); i < _pj_d; i += 1) {
                                                                                OUTPUT += "--";
                                                                                INDEX -= 1;
                                                                              }
                                                                            }
                                                                          }
                                                                        } else {
                                                                          if (POS - INDEX > 0) {
                                                                            for (var i = 0, _pj_d = POS - INDEX; i < _pj_d; i += 1) {
                                                                              OUTPUT += "++";
                                                                              INDEX += 1;
                                                                            }
                                                                          } else {
                                                                            if (POS - INDEX < -7) {
                                                                              OUTPUT += "-x";
                                                                              INDEX -= 10;
  
                                                                              if (POS - INDEX > 3) {
                                                                                OUTPUT += "+v";
                                                                                INDEX += 5;
  
                                                                                if (POS - INDEX > 0) {
                                                                                  for (var i = 0, _pj_d = POS - INDEX; i < _pj_d; i += 1) {
                                                                                    OUTPUT += "++";
                                                                                    INDEX += 1;
                                                                                  }
                                                                                } else {
                                                                                  if (POS - INDEX < 0) {
                                                                                    for (var i = 0, _pj_d = Math.abs(POS - INDEX); i < _pj_d; i += 1) {
                                                                                      OUTPUT += "--";
                                                                                      INDEX -= 1;
                                                                                    }
                                                                                  }
                                                                                }
                                                                              } else {
                                                                                if (POS - INDEX < -3) {
                                                                                  OUTPUT += "-v";
                                                                                  INDEX -= 5;
  
                                                                                  if (POS - INDEX > 0) {
                                                                                    for (var i = 0, _pj_d = POS - INDEX; i < _pj_d; i += 1) {
                                                                                      OUTPUT += "++";
                                                                                      INDEX += 1;
                                                                                    }
                                                                                  } else {
                                                                                    if (POS - INDEX < 0) {
                                                                                      for (var i = 0, _pj_d = Math.abs(POS - INDEX); i < _pj_d; i += 1) {
                                                                                        OUTPUT += "--";
                                                                                        INDEX -= 1;
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                } else {
                                                                                  if (POS - INDEX > 0) {
                                                                                    for (var i = 0, _pj_d = POS - INDEX; i < _pj_d; i += 1) {
                                                                                      OUTPUT += "++";
                                                                                      INDEX += 1;
                                                                                    }
                                                                                  } else {
                                                                                    if (POS - INDEX < 0) {
                                                                                      for (var i = 0, _pj_d = Math.abs(POS - INDEX); i < _pj_d; i += 1) {
                                                                                        OUTPUT += "--";
                                                                                        INDEX -= 1;
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            } else {
                                                                              if (POS - INDEX < -3) {
                                                                                OUTPUT += "-v";
                                                                                INDEX -= 5;
  
                                                                                if (POS - INDEX > 0) {
                                                                                  for (var i = 0, _pj_d = POS - INDEX; i < _pj_d; i += 1) {
                                                                                    OUTPUT += "++";
                                                                                    INDEX += 1;
                                                                                  }
                                                                                } else {
                                                                                  if (POS - INDEX < 0) {
                                                                                    for (var i = 0, _pj_d = Math.abs(POS - INDEX); i < _pj_d; i += 1) {
                                                                                      OUTPUT += "--";
                                                                                      INDEX -= 1;
                                                                                    }
                                                                                  }
                                                                                }
                                                                              } else {
                                                                                if (POS - INDEX < 0) {
                                                                                  for (var i = 0, _pj_d = Math.abs(POS - INDEX); i < _pj_d; i += 1) {
                                                                                    OUTPUT += "--";
                                                                                    INDEX -= 1;
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
  
                                                                    OUTPUT += "p";
                                                                  } else {
                                                                    if (_pj.in_es6(token, TOKENS_CAPS)) {
                                                                      POS = TOKENS_CAPS.indexOf(token) + 1;
  
                                                                      if ((token === "A" || token === "E" || token === "J" || token === "T") && INDEX !== 0) {
                                                                        OUTPUT += "c";
                                                                        INDEX = 0;
                                                                        clear_func = new Clear(INDEX);
                                                                        OUTPUT += new Clear(INDEX)[0].toString();
                                                                        INDEX = clear_func[1];
                                                                      } else {
                                                                        if (POS - INDEX > 0) {
                                                                          if (POS < POS - INDEX) {
                                                                            OUTPUT += "c";
                                                                            INDEX = 0;
                                                                            clear_func = new Clear(INDEX);
                                                                            OUTPUT += new Clear(INDEX)[0].toString();
                                                                            INDEX = clear_func[1];
                                                                          }
                                                                        } else {
                                                                          if (POS - INDEX < 0) {
                                                                            if (0 - POS > POS - INDEX) {
                                                                              OUTPUT += "c";
                                                                              INDEX = 0;
                                                                              clear_func = new Clear(INDEX);
                                                                              OUTPUT += new Clear(INDEX)[0].toString();
                                                                              INDEX = clear_func[1];
                                                                            }
                                                                          }
                                                                        }
                                                                      }
  
                                                                      if (POS - INDEX >= 20 || POS - INDEX > 17) {
                                                                        OUTPUT += "+t";
                                                                        INDEX += 20;
  
                                                                        if (POS - INDEX > 3) {
                                                                          OUTPUT += "+v";
                                                                          INDEX += 5;
  
                                                                          if (POS - INDEX > 0) {
                                                                            for (var i = 0, _pj_d = POS - INDEX; i < _pj_d; i += 1) {
                                                                              OUTPUT += "++";
                                                                              INDEX += 1;
                                                                            }
                                                                          } else {
                                                                            if (POS - INDEX < 0) {
                                                                              for (var i = 0, _pj_d = Math.abs(POS - INDEX); i < _pj_d; i += 1) {
                                                                                OUTPUT += "--";
                                                                                INDEX -= 1;
                                                                              }
                                                                            }
                                                                          }
                                                                        } else {
                                                                          if (POS - INDEX < -3) {
                                                                            OUTPUT += "-v";
                                                                            INDEX -= 5;
  
                                                                            if (POS - INDEX > 0) {
                                                                              for (var i = 0, _pj_d = POS - INDEX; i < _pj_d; i += 1) {
                                                                                OUTPUT += "++";
                                                                                INDEX += 1;
                                                                              }
                                                                            } else {
                                                                              if (POS - INDEX < 0) {
                                                                                for (var i = 0, _pj_d = Math.abs(POS - INDEX); i < _pj_d; i += 1) {
                                                                                  OUTPUT += "--";
                                                                                  INDEX -= 1;
                                                                                }
                                                                              }
                                                                            }
                                                                          } else {
                                                                            if (POS - INDEX > 0) {
                                                                              for (var i = 0, _pj_d = POS - INDEX; i < _pj_d; i += 1) {
                                                                                OUTPUT += "++";
                                                                                INDEX += 1;
                                                                              }
                                                                            } else {
                                                                              if (POS - INDEX < 0) {
                                                                                for (var i = 0, _pj_d = Math.abs(POS - INDEX); i < _pj_d; i += 1) {
                                                                                  OUTPUT += "--";
                                                                                  INDEX -= 1;
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      } else {
                                                                        if (POS - INDEX > 7) {
                                                                          OUTPUT += "+x";
                                                                          INDEX += 10;
  
                                                                          if (POS - INDEX > 3) {
                                                                            OUTPUT += "+v";
                                                                            INDEX += 5;
  
                                                                            if (POS - INDEX > 0) {
                                                                              for (var i = 0, _pj_d = POS - INDEX; i < _pj_d; i += 1) {
                                                                                OUTPUT += "++";
                                                                                INDEX += 1;
                                                                              }
                                                                            } else {
                                                                              if (POS - INDEX < 0) {
                                                                                for (var i = 0, _pj_d = Math.abs(POS - INDEX); i < _pj_d; i += 1) {
                                                                                  OUTPUT += "--";
                                                                                  INDEX -= 1;
                                                                                }
                                                                              }
                                                                            }
                                                                          } else {
                                                                            if (POS - INDEX < -3) {
                                                                              OUTPUT += "-v";
                                                                              INDEX -= 5;
  
                                                                              if (POS - INDEX > 0) {
                                                                                for (var i = 0, _pj_d = POS - INDEX; i < _pj_d; i += 1) {
                                                                                  OUTPUT += "++";
                                                                                  INDEX += 1;
                                                                                }
                                                                              } else {
                                                                                if (POS - INDEX < 0) {
                                                                                  for (var i = 0, _pj_d = Math.abs(POS - INDEX); i < _pj_d; i += 1) {
                                                                                    OUTPUT += "--";
                                                                                    INDEX -= 1;
                                                                                  }
                                                                                }
                                                                              }
                                                                            } else {
                                                                              if (POS - INDEX > 0) {
                                                                                for (var i = 0, _pj_d = POS - INDEX; i < _pj_d; i += 1) {
                                                                                  OUTPUT += "++";
                                                                                  INDEX += 1;
                                                                                }
                                                                              } else {
                                                                                if (POS - INDEX < 0) {
                                                                                  for (var i = 0, _pj_d = Math.abs(POS - INDEX); i < _pj_d; i += 1) {
                                                                                    OUTPUT += "--";
                                                                                    INDEX -= 1;
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        } else {
                                                                          if (POS - INDEX > 3) {
                                                                            OUTPUT += "+v";
                                                                            INDEX += 5;
  
                                                                            if (POS - INDEX > 0) {
                                                                              for (var i = 0, _pj_d = POS - INDEX; i < _pj_d; i += 1) {
                                                                                OUTPUT += "++";
                                                                                INDEX += 1;
                                                                              }
                                                                            } else {
                                                                              if (POS - INDEX < 0) {
                                                                                for (var i = 0, _pj_d = Math.abs(POS - INDEX); i < _pj_d; i += 1) {
                                                                                  OUTPUT += "--";
                                                                                  INDEX -= 1;
                                                                                }
                                                                              }
                                                                            }
                                                                          } else {
                                                                            if (POS - INDEX > 0) {
                                                                              for (var i = 0, _pj_d = POS - INDEX; i < _pj_d; i += 1) {
                                                                                OUTPUT += "++";
                                                                                INDEX += 1;
                                                                              }
                                                                            } else {
                                                                              if (POS - INDEX < -7) {
                                                                                OUTPUT += "-x";
                                                                                INDEX -= 10;
  
                                                                                if (POS - INDEX > 3) {
                                                                                  OUTPUT += "+v";
                                                                                  INDEX += 5;
  
                                                                                  if (POS - INDEX > 0) {
                                                                                    for (var i = 0, _pj_d = POS - INDEX; i < _pj_d; i += 1) {
                                                                                      OUTPUT += "++";
                                                                                      INDEX += 1;
                                                                                    }
                                                                                  } else {
                                                                                    if (POS - INDEX < 0) {
                                                                                      for (var i = 0, _pj_d = Math.abs(POS - INDEX); i < _pj_d; i += 1) {
                                                                                        OUTPUT += "--";
                                                                                        INDEX -= 1;
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                } else {
                                                                                  if (POS - INDEX < -3) {
                                                                                    OUTPUT += "-v";
                                                                                    INDEX -= 5;
  
                                                                                    if (POS - INDEX > 0) {
                                                                                      for (var i = 0, _pj_d = POS - INDEX; i < _pj_d; i += 1) {
                                                                                        OUTPUT += "++";
                                                                                        INDEX += 1;
                                                                                      }
                                                                                    } else {
                                                                                      if (POS - INDEX < 0) {
                                                                                        for (var i = 0, _pj_d = Math.abs(POS - INDEX); i < _pj_d; i += 1) {
                                                                                          OUTPUT += "--";
                                                                                          INDEX -= 1;
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  } else {
                                                                                    if (POS - INDEX > 0) {
                                                                                      for (var i = 0, _pj_d = POS - INDEX; i < _pj_d; i += 1) {
                                                                                        OUTPUT += "++";
                                                                                        INDEX += 1;
                                                                                      }
                                                                                    } else {
                                                                                      if (POS - INDEX < 0) {
                                                                                        for (var i = 0, _pj_d = Math.abs(POS - INDEX); i < _pj_d; i += 1) {
                                                                                          OUTPUT += "--";
                                                                                          INDEX -= 1;
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              } else {
                                                                                if (POS - INDEX < -3) {
                                                                                  OUTPUT += "-v";
                                                                                  INDEX -= 5;
  
                                                                                  if (POS - INDEX > 0) {
                                                                                    for (var i = 0, _pj_d = POS - INDEX; i < _pj_d; i += 1) {
                                                                                      OUTPUT += "++";
                                                                                      INDEX += 1;
                                                                                    }
                                                                                  } else {
                                                                                    if (POS - INDEX < 0) {
                                                                                      for (var i = 0, _pj_d = Math.abs(POS - INDEX); i < _pj_d; i += 1) {
                                                                                        OUTPUT += "--";
                                                                                        INDEX -= 1;
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                } else {
                                                                                  if (POS - INDEX < 0) {
                                                                                    for (var i = 0, _pj_d = Math.abs(POS - INDEX); i < _pj_d; i += 1) {
                                                                                      OUTPUT += "--";
                                                                                      INDEX -= 1;
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
  
                                                                      OUTPUT += "^p";
                                                                    } else {
                                                                      if (token === " ") {
                                                                        OUTPUT += "_";
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  
  document.getElementById("codeOutput").innerText += OUTPUT;
  copyButton.style.opacity = "1";
}

function copyOutput() {
  const copyText = document.getElementById("codeOutput").innerText;
  const textArea = document.createElement('textarea');
  textArea.textContent = copyText;
  document.body.append(textArea);
  textArea.select();
  document.execCommand("copy");
  textArea.remove();
}
