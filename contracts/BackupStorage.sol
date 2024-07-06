// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BackupStorage {
    // Struct to store backup details
    struct Backup {
        uint256 timestamp;
        string cid;
    }

    // Mapping to store backups by user address
    mapping(address => Backup[]) private userBackups;

    // Event to be emitted when a backup is added
    event BackupAdded(address indexed user, string cid, uint256 timestamp);

    // Function to add a new backup
    function addBackup(string memory cid) public {
        Backup memory newBackup = Backup(block.timestamp, cid);
        userBackups[msg.sender].push(newBackup);

        emit BackupAdded(msg.sender, cid, block.timestamp);
    }

    // Function to retrieve backups for a specific user
    function getBackups(address user) public view returns (Backup[] memory) {
        return userBackups[user];
    }
}
