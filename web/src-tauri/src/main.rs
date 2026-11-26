// Evita abrir uma janela de terminal junto com o app na versão final (release) no Windows
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

fn main() {
  spg_lib::run();
}
