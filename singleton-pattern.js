/* Singleton Pattern

- Creational Pattern 
- When you want to limit the number of instances of an object to just 0 or 1

*/

function Process(state) {
    this.state = state;
}

const Singleton = (function() {
    function ProcessManager(){
        this.numProcesses = 0;
    }
    let pManager;
    function createProcessManager(){
        pManager = new ProcessManager()
        return pManager;
    }
    return {
        getProcessManager:()=>{
            if(!pManager){
                pManager = createProcessManager();
            }
            return pManager
        }
    }
})();

const processManager = Singleton.getProcessManager();
const processManager2 = Singleton.getProcessManager();
const processManager3 = Singleton.getProcessManager();


console.log(processManager2 === processManager3);
console.log(processManager === processManager3);