// Class for model data.
export class OpenLocks {
    constructor(flags) {
        this.data = mergeObject(this.defaultData(), flags || {}, { inplace: false });
        this.enabled = this.data.enabled;
        this.passive = this.data.passive;
        this.disarmTrap = parseInt(this.data.disarmTrap);
        this.findTrap = parseInt(this.data.findTrap);
        this.skillfindTrap = this.data.skillfindTrap,
        this.forceLock = parseInt(this.data.forceLock);
        this.openLock = parseInt(this.data.openLock);
        this.keylock = this.data.keylock;
        this.toolsBreak = parseInt(this.data.toolsBreak);
        this.resetTrap = this.data.resetTrap;
    }

    defaultData() {
        return {
            enabled: false,
            passive: 10,
            disarmTrap: 10,
            skillfindTrap: 'prc',
            findTrap: 10,
            forceLock: 12,
            openLock: 10,
            toolsBreak: 5,
            keylock: '',
            resetTrap: false
        }
    }
    toggleEnabled(enabled) {
        this.enabled = enabled;
        if (!enabled) {
            mergeObject(this, this.defaultData());
        }
    }
}