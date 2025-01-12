import os
import subprocess
import sys

def create_venv():
    # Check if virtual environment exists
    if not os.path.exists('venv'):
        print("Creating virtual environment...")
        subprocess.check_call([sys.executable, "-m", "venv", "venv"])
    else:
        print("Virtual environment already exists.")

def install_requirements():
    print("Installing dependencies from requirements.txt...")
    subprocess.check_call([os.path.join('venv', 'bin', 'pip'), 'install', '-r', 'requirements.txt'])

if __name__ == '__main__':
    create_venv()
    install_requirements()
    print("Setup complete. To activate the virtual environment, run:")
    print("source venv/bin/activate  # Linux/Mac")
    print("venv\\Scripts\\activate     # Windows")
