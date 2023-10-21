#include "MyForm.h"
using namespace System;
using namespace System::Windows::Forms;
[STAThread]
void __clrcall WinMain(array<String^>^ args){
    Application::EnableVisualStyles();
    Application::SetCompatibleTextRenderingDefault(false);
    StarlinkPlus::MyForm form;
    Application::Run(% form);
}