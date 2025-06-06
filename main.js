// Données simulées
let vehiclesData = [
    { id: 'VSAV-1', type: 'VSAV', description: 'Ambulance 1', image: "https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 'FPT-1', type: 'FPT', description: 'Fourgon Pompe Tonne', image: "https://images.pexels.com/photos/4021778/pexels-photo-4021778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 'EPA-1', type: 'EPA', description: 'Échelle Pivotante', image: "https://images.pexels.com/photos/4021777/pexels-photo-4021777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
];

let equipmentData = {
    'VSAV': [
        { id: 1, name: "Défibrillateur", quantity: 1, category: "Médical", location: "Cabine", image: "https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 2, name: "Trousse de secours", quantity: 1, category: "Médical", location: "Compartiment arrière gauche", image: "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 3, name: "Respecteur", quantity: 1, category: "Médical", location: "Compartiment arrière gauche" },
        { id: 4, name: "Oxygène portable", quantity: 1, category: "Médical", location: "Compartiment arrière droit", image: "https://images.pexels.com/photos/4021777/pexels-photo-4021777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 5, name: "Planche dorsale", quantity: 1, category: "Immobilisation", location: "Toit" },
        { id: 6, name: "Collier cervical", quantity: 2, category: "Immobilisation", location: "Compartiment arrière gauche" },
        { id: 7, name: "Couverture de survie", quantity: 4, category: "Secours", location: "Compartiment arrière droit" }
    ],
    'FPT': [
        { id: 8, name: "Lance à eau", quantity: 2, category: "Extinction", location: "Compartiment pompe", image: "https://images.pexels.com/photos/4021778/pexels-photo-4021778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 9, name: "Tuyaux (20m)", quantity: 6, category: "Extinction", location: "Dévidoir" },
        { id: 10, name: "Cône de signalisation", quantity: 6, category: "Sécurité", location: "Coffre" },
        { id: 11, name: "Éclairage de chantier", quantity: 2, category: "Sécurité", location: "Coffre" },
        { id: 12, name: "Hache", quantity: 2, category: "Désincarcération", location: "Cabine" },
        { id: 13, name: "Cisailles hydrauliques", quantity: 1, category: "Désincarcération", location: "Compartiment outils" }
    ],
    'EPA': [
        { id: 14, name: "Harnais de sécurité", quantity: 2, category: "Hauteur", location: "Cabine" },
        { id: 15, name: "Corde de sauvetage", quantity: 1, category: "Hauteur", location: "Compartiment cordes" },
        { id: 16, name: "Longe", quantity: 2, category: "Hauteur", location: "Compartiment cordes" },
        { id: 17, name: "Mousqueton", quantity: 4, category: "Hauteur", location: "Compartiment cordes" },
        { id: 18, name: "Éclairage directionnel", quantity: 2, category: "Sécurité", location: "Coffre" }
    ]
};

let inspectionReports = [
    {
        id: 1,
        vehicleId: "VSAV-1",
        vehicleName: "Ambulance 1",
        date: "2023-04-24T08:15:00",
        inspector: "Capitaine Dupont",
        equipment: [
            { id: 1, name: "Défibrillateur", quantity: 1, checked: true, quantityOk: true, location: "Cabine" },
            { id: 2, name: "Trousse de secours", quantity: 1, checked: true, quantityOk: true, location: "Compartiment arrière gauche" },
            { id: 3, name: "Respecteur", quantity: 1, checked: true, quantityOk: true, location: "Compartiment arrière gauche" },
            { id: 4, name: "Oxygène portable", quantity: 1, checked: true, quantityOk: true, location: "Compartiment arrière droit" },
            { id: 5, name: "Planche dorsale", quantity: 1, checked: true, quantityOk: true, location: "Toit" },
            { id: 6, name: "Collier cervical", quantity: 2, checked: true, quantityOk: true, location: "Compartiment arrière gauche" },
            { id: 7, name: "Couverture de survie", quantity: 4, checked: true, quantityOk: true, location: "Compartiment arrière droit" }
        ],
        notes: "Tout le matériel est en place et en bon état.",
        completed: true
    },
    {
        id: 2,
        vehicleId: "FPT-1",
        vehicleName: "Fourgon Pompe Tonne",
        date: "2023-04-23T17:30:00",
        inspector: "Lieutenant Martin",
        equipment: [
            { id: 8, name: "Lance à eau", quantity: 2, checked: true, quantityOk: true, location: "Compartiment pompe" },
            { id: 9, name: "Tuyaux (20m)", quantity: 6, checked: true, quantityOk: false, missing: 1, location: "Dévidoir" },
            { id: 10, name: "Cône de signalisation", quantity: 6, checked: true, quantityOk: true, location: "Coffre" },
            { id: 11, name: "Éclairage de chantier", quantity: 2, checked: true, quantityOk: true, location: "Coffre" },
            { id: 12, name: "Hache", quantity: 2, checked: true, quantityOk: true, location: "Cabine" },
            { id: 13, name: "Cisailles hydrauliques", quantity: 1, checked: true, quantityOk: false, note: "Besoin de révision", location: "Compartiment outils" }
        ],
        notes: "Un tuyau manque (tombé en intervention). Cisailles hydrauliques à réviser.",
        completed: true
    }
];

let usersData = [
    { id: 'dupont', name: 'Capitaine Dupont', role: 'Admin', image: 'https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 'martin', name: 'Lieutenant Martin', role: 'User', image: 'https://images.pexels.com/photos/4021778/pexels-photo-4021778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 'legrand', name: 'Sergent Legrand', role: 'User', image: 'https://images.pexels.com/photos/4021777/pexels-photo-4021777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }
];

// État de l'application
let currentState = {
    selectedVehicle: null,
    selectedVehicleType: null,
    currentUser: "Capitaine Dupont", // This could be linked to usersData.find(u => u.id === 'dupont')
    darkMode: false,
    currentInspection: {
        equipment: [],
        checkedCount: 0,
        completed: false
    }
};

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    // Afficher l'utilisateur actuel
    document.getElementById('currentUser').textContent = currentState.currentUser;
    
    // Configurer les événements pour les éléments statiques
    document.getElementById('userMenu').addEventListener('click', toggleUserDropdown);
    document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);
    document.getElementById('logoutBtn').addEventListener('click', logout);
    
    // Ajout de vérifications défensives pour les éléments de filtre
    const filterSelect = document.getElementById('filterSelect');
    if (filterSelect) {
        filterSelect.addEventListener('change', applyEquipmentFilters);
    } else {
        console.error("Erreur: L'élément avec l'ID 'filterSelect' n'a pas été trouvé.");
    }

    const locationFilterSelect = document.getElementById('locationFilterSelect');
    if (locationFilterSelect) {
        locationFilterSelect.addEventListener('change', applyEquipmentFilters);
    } else {
        console.error("Erreur: L'élément avec l'ID 'locationFilterSelect' n'a pas été trouvé.");
    }

    document.getElementById('saveBtn').addEventListener('click', () => saveInspection(false));
    document.getElementById('completeBtn').addEventListener('click', () => saveInspection(true));
    document.getElementById('exportReportBtn').addEventListener('click', exportReport);
    document.getElementById('showAdminPageBtn').addEventListener('click', showAdminPage);
    document.getElementById('showHelpBtn').addEventListener('click', showHelp);
    document.getElementById('backToSelectionBtn1').addEventListener('click', backToSelection);
    document.getElementById('backToSelectionBtn2').addEventListener('click', backToSelection);
    document.getElementById('manageVehiclesBtn').addEventListener('click', manageVehicles);
    document.getElementById('manageEquipmentBtn').addEventListener('click', manageEquipment);
    document.getElementById('manageUsersBtn').addEventListener('click', manageUsers); // New: User management button
    document.getElementById('addNewVehicleBtn').addEventListener('click', addNewVehicle);
    document.getElementById('cancelAddVehicleBtn').addEventListener('click', cancelAddVehicle);
    document.getElementById('confirmAddVehicleBtn').addEventListener('click', confirmAddVehicle);
    document.getElementById('addNewEquipmentBtn').addEventListener('click', addNewEquipment);
    document.getElementById('cancelAddEquipmentBtn').addEventListener('click', cancelAddEquipment);
    document.getElementById('confirmAddEquipmentBtn').addEventListener('click', confirmAddEquipment);
    document.getElementById('addNewUserBtn').addEventListener('click', addNewUser); // New: Add user button
    document.getElementById('cancelAddUserBtn').addEventListener('click', cancelAddUser); // New: Cancel add user button
    document.getElementById('confirmAddUserBtn').addEventListener('click', confirmAddUser); // New: Confirm add user button
    document.getElementById('printReportBtn').addEventListener('click', printReport);
    document.getElementById('exportSingleReportBtn').addEventListener('click', exportSingleReport);

    // Event listeners for closing modals
    document.querySelectorAll('.close-modal-btn').forEach(button => {
        button.addEventListener('click', closeModals);
    });
    // Event listener for closing image viewer modal
    document.querySelector('.close-image-viewer-btn').addEventListener('click', closeImagePopup);


    // Event listeners for vehicle selection cards
    document.querySelectorAll('.vehicle-card').forEach(card => {
        card.addEventListener('click', function() {
            const vehicleId = this.dataset.vehicleId;
            const vehicleName = this.dataset.vehicleName;
            selectVehicle(vehicleId, vehicleName);
        });
    });

    // Populate history table and attach listeners
    updateHistoryTable();
    
    // Simuler des données stockées localement
    if(localStorage.getItem('equipmentData')) {
        equipmentData = JSON.parse(localStorage.getItem('equipmentData'));
    }
    
    if(localStorage.getItem('inspectionReports')) {
        inspectionReports = JSON.parse(localStorage.getItem('inspectionReports'));
    }

    if(localStorage.getItem('vehiclesData')) {
        vehiclesData = JSON.parse(localStorage.getItem('vehiclesData'));
        // Re-render vehicle cards on main page if data changed
        renderVehicleCards();
    }

    if(localStorage.getItem('usersData')) { // New: Load users data
        usersData = JSON.parse(localStorage.getItem('usersData'));
    }
    
    // Charger le mode sombre si défini
    if(localStorage.getItem('darkMode') === 'true') {
        toggleDarkMode();
    }
});

// Fonctions de l'interface
function toggleUserDropdown() {
    document.getElementById('userDropdown').classList.toggle('hidden');
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    currentState.darkMode = !currentState.darkMode;
    localStorage.setItem('darkMode', currentState.darkMode);
    
    const icon = document.getElementById('darkModeToggle').querySelector('i');
    if(currentState.darkMode) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

function logout() {
    // Dans une vraie application, on ferait une déconnexion propre
    alert('Déconnexion effectuée');
    toggleUserDropdown();
}

function renderVehicleCards() {
    const vehicleSelectionGrid = document.querySelector('#vehicleSelectionPage .grid');
    vehicleSelectionGrid.innerHTML = ''; // Clear existing cards

    vehiclesData.forEach(vehicle => {
        const card = document.createElement('div');
        card.className = `card bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition vehicle-card`;
        card.dataset.vehicleId = vehicle.id;
        card.dataset.vehicleName = vehicle.description;

        // Determine status (simulated for now)
        let statusText = 'Disponible';
        let statusClass = 'bg-green-100 text-green-800';
        // You might want to add a 'status' property to vehiclesData
        // For now, let's just make them all available or add simple logic
        if (vehicle.id === 'FPT-1') {
            statusText = 'En intervention';
            statusClass = 'bg-yellow-100 text-yellow-800';
        } else if (vehicle.id === 'EPA-1') {
            statusText = 'Maintenance';
            statusClass = 'bg-red-100 text-red-800';
        }

        // Simulate last check date
        let lastCheck = 'Aujourd\'hui, 08:15';
        if (vehicle.id === 'FPT-1') lastCheck = 'Hier, 17:30';
        if (vehicle.id === 'EPA-1') lastCheck = '21/04/2023';

        card.innerHTML = `
            <div class="flex items-center space-x-4">
                ${vehicle.image ? `
                <img src="${vehicle.image}" alt="${vehicle.description}" class="w-20 h-20 object-cover rounded-full cursor-pointer hover:opacity-80 transition-opacity image-thumbnail flex-shrink-0" data-image-url="${vehicle.image}">
                ` : ''}
                <div class="flex-grow">
                    <div class="flex justify-between items-start mb-1">
                        <h3 class="font-bold text-lg">${vehicle.id}</h3>
                        <span class="${statusClass} text-xs font-medium px-2.5 py-0.5 rounded">${statusText}</span>
                    </div>
                    <p class="text-gray-600 mb-1">${vehicle.description}</p>
                    <div class="mt-4">
                        <div class="flex justify-between text-sm text-gray-500">
                            <span>Dernière vérif:</span>
                            <span id="lastCheck${vehicle.id.replace('-', '')}">${lastCheck}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        vehicleSelectionGrid.appendChild(card);
    });

    // Re-attach event listeners for vehicle selection cards
    document.querySelectorAll('.vehicle-card').forEach(card => {
        card.addEventListener('click', function() {
            const vehicleId = this.dataset.vehicleId;
            const vehicleName = this.dataset.vehicleName;
            selectVehicle(vehicleId, vehicleName);
        });
    });

    // Re-attach event listeners for vehicle image thumbnails
    document.querySelectorAll('.vehicle-card .image-thumbnail').forEach(img => {
        img.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent card click from firing
            showImagePopup(this.dataset.imageUrl);
        });
    });
}


function selectVehicle(vehicleId, vehicleName) {
    currentState.selectedVehicle = vehicleId;
    currentState.selectedVehicleType = vehicleId.split('-')[0];
    document.getElementById('vehicleTitle').textContent = `Vérification: ${vehicleId} - ${vehicleName}`;
    
    // Préparer l'inspection
    currentState.currentInspection = {
        equipment: equipmentData[currentState.selectedVehicleType].map(item => ({
            ...item,
            checked: false,
            quantityOk: true,
            missing: 0,
            note: ''
        })),
        checkedCount: 0,
        completed: false
    };
    
    // Afficher la page d'inventaire
    document.getElementById('vehicleSelectionPage').classList.add('hidden');
    document.getElementById('inventoryPage').classList.remove('hidden');
    
    // Mettre à jour la liste d'équipement et les filtres
    populateLocationFilterSelect(); // Populate location filter for the selected vehicle type
    updateEquipmentList(); // Rendre la liste du matériel et appliquer les filtres
    updateProgress();
}

function backToSelection() {
    document.getElementById('vehicleSelectionPage').classList.remove('hidden');
    document.getElementById('inventoryPage').classList.add('hidden');
    document.getElementById('adminPage').classList.add('hidden');
    
    // Cacher la section d'export si visible
    document.getElementById('exportSection').classList.add('hidden');
    renderVehicleCards(); // Re-render vehicle cards when returning to selection
}

function showAdminPage() {
    document.getElementById('vehicleSelectionPage').classList.add('hidden');
    document.getElementById('inventoryPage').classList.add('hidden');
    document.getElementById('adminPage').classList.remove('hidden');
}

function showHelp() {
    document.getElementById('helpModal').classList.remove('hidden');
}

function closeModals() {
    document.getElementById('equipmentModal').classList.add('hidden');
    document.getElementById('reportModal').classList.add('hidden');
    document.getElementById('helpModal').classList.add('hidden');
    document.getElementById('vehiclesModal').classList.add('hidden');
    document.getElementById('usersModal').classList.add('hidden'); // New: Close users modal
}

// Fonctions de gestion de l'inventaire
function updateEquipmentList() {
    const equipmentList = document.getElementById('equipmentList');
    equipmentList.innerHTML = '';
    
    currentState.currentInspection.equipment.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = `equipment-item card bg-white rounded-lg shadow-sm p-4 transition ${item.checked ? 'border-l-4 border-green-500' : ''}`;
        
        itemElement.innerHTML = `
            <div class="flex items-center space-x-4">
                ${item.image ? `
                <img src="${item.image}" alt="${item.name}" class="w-20 h-20 object-cover rounded-full cursor-pointer hover:opacity-80 transition-opacity image-thumbnail flex-shrink-0" data-image-url="${item.image}">
                ` : ''}
                <div class="flex-grow">
                    <h4 class="font-bold text-lg">${item.name}</h4>
                    <p class="text-gray-600 mb-1">${item.category} - Quantité attendue: ${item.quantity}</p>
                    ${item.location ? `<p class="text-sm text-gray-500">Emplacement: ${item.location}</p>` : ''}
                    ${item.documentation ? `
                    <div class="flex space-x-2 text-sm text-gray-500">
                        <a href="${item.documentation}" target="_blank" class="hover:text-blue-600">
                            <i class="fas fa-file-alt mr-1"></i> Documentation
                        </a>
                    </div>
                    ` : ''}
                </div>
                <div class="flex-shrink-0 ml-auto">
                    <button class="p-2 rounded-full toggle-equipment-btn ${item.checked ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'}" data-item-id="${item.id}">
                        <i class="fas fa-${item.checked ? 'check-circle' : 'circle'}"></i>
                    </button>
                </div>
            </div>
            <div id="details-${item.id}" class="pl-2 ${item.checked ? '' : 'hidden'}">
                <div class="mb-2">
                    <label class="block text-sm text-gray-700 mb-1">Quantité présente</label>
                    <div class="flex items-center">
                        <button class="px-2 py-1 bg-gray-200 rounded-l hover:bg-gray-300 adjust-quantity-btn" data-item-id="${item.id}" data-change="-1">
                            <i class="fas fa-minus"></i>
                        </button>
                        <input type="number" id="quantity-${item.id}" value="${item.quantity - (item.missing || 0)}" min="0" 
                            class="w-16 text-center px-2 py-1 border-t border-b border-gray-300 quantity-input" data-item-id="${item.id}">
                        <button class="px-2 py-1 bg-gray-200 rounded-r hover:bg-gray-300 adjust-quantity-btn" data-item-id="${item.id}" data-change="1">
                            <i class="fas fa-plus"></i>
                        </button>
                        <span class="ml-2 text-sm ${item.quantityOk ? 'text-green-600' : 'text-red-600'}">
                            ${item.quantityOk ? 'OK' : 'NON CONFORME'}
                        </span>
                    </div>
                </div>
                <div>
                    <label class="block text-sm text-gray-700 mb-1">Notes</label>
                    <input type="text" id="note-${item.id}" value="${item.note || ''}" placeholder="Ajouter une note..." 
                        class="w-full px-2 py-1 border rounded text-sm note-input" data-item-id="${item.id}">
                </div>
            </div>
        `;
        
        equipmentList.appendChild(itemElement);
    });

    // Attach event listeners for dynamically created elements
    equipmentList.querySelectorAll('.toggle-equipment-btn').forEach(button => {
        button.addEventListener('click', function() {
            toggleEquipmentChecked(parseInt(this.dataset.itemId));
        });
    });
    equipmentList.querySelectorAll('.adjust-quantity-btn').forEach(button => {
        button.addEventListener('click', function() {
            adjustQuantity(parseInt(this.dataset.itemId), parseInt(this.dataset.change));
        });
    });
    equipmentList.querySelectorAll('.quantity-input').forEach(input => {
        input.addEventListener('change', function() {
            updateItemQuantity(parseInt(this.dataset.itemId), this.value);
        });
    });
    equipmentList.querySelectorAll('.note-input').forEach(input => {
        input.addEventListener('change', function() {
            updateItemNote(parseInt(this.dataset.itemId), this.value);
        });
    });
    equipmentList.querySelectorAll('.image-thumbnail').forEach(img => {
        img.addEventListener('click', function() {
            showImagePopup(this.dataset.imageUrl);
        });
    });

    applyEquipmentFilters(); // Appliquer les filtres après que les éléments sont dans le DOM
}

function toggleEquipmentChecked(id) {
    const item = currentState.currentInspection.equipment.find(i => i.id === id);
    item.checked = !item.checked;
    
    if(item.checked) {
        currentState.currentInspection.checkedCount++;
    } else {
        currentState.currentInspection.checkedCount--;
    }
    
    updateEquipmentList();
    updateProgress();
    // applyEquipmentFilters(); // Already called by updateEquipmentList
}

function adjustQuantity(id, change) {
    const input = document.getElementById(`quantity-${id}`);
    let newValue = parseInt(input.value) + change;
    if(newValue < 0) newValue = 0;
    input.value = newValue;
    
    updateItemQuantity(id, newValue);
}

function updateItemQuantity(id, value) {
    const item = currentState.currentInspection.equipment.find(i => i.id === id);
    const quantity = parseInt(value) || 0;
    
    item.quantityOk = quantity === item.quantity;
    item.missing = item.quantity - quantity;
    
    updateEquipmentList();
}

function updateItemNote(id, note) {
    const item = currentState.currentInspection.equipment.find(i => i.id === id);
    item.note = note;
}

function updateProgress() {
    const totalItems = currentState.currentInspection.equipment.length;
    const checkedItems = currentState.currentInspection.checkedCount;
    const percentage = totalItems > 0 ? Math.round((checkedItems / totalItems) * 100) : 0;
    
    document.getElementById('progressPercentage').textContent = `${percentage}%`;
    document.getElementById('progressBar').style.width = `${percentage}%`;
    
    // Changer la couleur en fonction de la progression
    const progressBar = document.getElementById('progressBar');
    if(percentage < 30) {
        progressBar.classList.add('bg-red-500');
        progressBar.classList.remove('bg-yellow-500', 'bg-green-500');
    } else if(percentage < 70) {
        progressBar.classList.add('bg-yellow-500');
        progressBar.classList.remove('bg-red-500', 'bg-green-500');
    } else {
        progressBar.classList.add('bg-green-500');
        progressBar.classList.remove('bg-red-500', 'bg-green-500');
    }
}

function applyEquipmentFilters() { // Renamed from filterEquipmentList
    const checkedFilter = document.getElementById('filterSelect').value;
    const locationFilter = document.getElementById('locationFilterSelect').value;
    
    document.querySelectorAll('.equipment-item').forEach(el => {
        const itemId = parseInt(el.querySelector('.toggle-equipment-btn').dataset.itemId);
        const item = currentState.currentInspection.equipment.find(i => i.id === itemId);

        let show = true;

        // Apply checked/unchecked filter
        if (checkedFilter === 'checked' && !item.checked) {
            show = false;
        } else if (checkedFilter === 'unchecked' && item.checked) {
            show = false;
        }

        // Apply location filter
        if (locationFilter !== 'all' && item.location !== locationFilter) {
            show = false;
        }

        el.style.display = show ? '' : 'none';
    });
}

function populateLocationFilterSelect() {
    const locationSelect = document.getElementById('locationFilterSelect');
    locationSelect.innerHTML = '<option value="all">Tous les emplacements</option>'; // Reset options
    
    const uniqueLocations = new Set();
    if (equipmentData[currentState.selectedVehicleType]) {
        equipmentData[currentState.selectedVehicleType].forEach(item => {
            if (item.location) {
                uniqueLocations.add(item.location);
            }
        });
    }

    Array.from(uniqueLocations).sort().forEach(location => {
        const option = document.createElement('option');
        option.value = location;
        option.textContent = location;
        locationSelect.appendChild(option);
    });
}

function saveInspection(complete) {
    const notes = document.getElementById('inspectionNotes').value;
    
    // Vérifier si tous les éléments ont été contrôlés pour une complétion
    if(complete) {
        const allChecked = currentState.currentInspection.equipment.every(item => item.checked);
        if(!allChecked) {
            alert("Veuillez vérifier tous les équipements avant de terminer l'inspection.");
            return;
        }
        
        currentState.currentInspection.completed = true;
        
        // Enregistrer le rapport
        const newReport = {
            id: Date.now(),
            vehicleId: currentState.selectedVehicle,
            vehicleName: `${currentState.selectedVehicleType} - ${currentState.selectedVehicle}`,
            date: new Date().toISOString(),
            inspector: currentState.currentUser,
            equipment: currentState.currentInspection.equipment,
            notes: notes,
            completed: true
        };
        
        inspectionReports.unshift(newReport);
        localStorage.setItem('inspectionReports', JSON.stringify(inspectionReports));
        
        // Afficher la section d'export
        document.getElementById('exportSection').classList.remove('hidden');
        
        // Mettre à jour l'affichage de la dernière vérification
        const lastCheckElement = document.getElementById(`lastCheck${currentState.selectedVehicle.replace('-', '')}`);
        if(lastCheckElement) {
            const now = new Date();
            lastCheckElement.textContent = `${now.toLocaleDateString()} ${now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`;
        }
        updateHistoryTable(); // Update history table after saving a new report
    } else {
        // Simple sauvegarde sans terminer
        alert("Progression sauvegardée. Vous pouvez continuer plus tard.");
    }
}

function exportReport() {
    // Dans une vraie application, on générerait un PDF ou un fichier Excel
    // Ici, on simule avec une prévisualisation
    
    const report = inspectionReports[0]; // Le dernier rapport
    
    // Mettre à jour le modal de rapport
    document.getElementById('reportTitle').textContent = `Rapport de vérification - ${report.vehicleId}`;
    
    const reportContent = document.getElementById('reportContent');
    reportContent.innerHTML = '';
    
    // En-tête du rapport
    const header = document.createElement('div');
    header.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
                <p class="text-sm text-gray-600">Véhicule</p>
                <p class="font-medium">${report.vehicleName}</p>
            </div>
            <div>
                <p class="text-sm text-gray-600">Date et heure</p>
                <p class="font-medium">${new Date(report.date).toLocaleString()}</p>
            </div>
            <div>
                <p class="text-sm text-gray-600">Rédacteur</p>
                <p class="font-medium">${report.inspector}</p>
            </div>
            <div>
                <p class="text-sm text-gray-600">Statut</p>
                <p class="font-medium text-green-600">COMPLET</p>
            </div>
        </div>
    `;
    reportContent.appendChild(header);
    
    // Section du matériel
    const equipmentSection = document.createElement('div');
    equipmentSection.innerHTML = `
        <h4 class="font-semibold border-b pb-2 mb-3">Matériel vérifié</h4>
        <div class="overflow-x-auto">
            <table class="min-w-full">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="px-4 py-2 text-left">Équipement</th>
                        <th class="px-4 py-2 text-left">Catégorie</th>
                        <th class="px-4 py-2 text-left">Emplacement</th>
                        <th class="px-4 py-2 text-left">Quantité</th>
                        <th class="px-4 py-2 text-left">Statut</th>
                    </tr>
                </thead>
                <tbody id="reportItems">
                    <!-- Les éléments seront ajoutés dynamiquement -->
                </tbody>
            </table>
        </div>
    `;
    reportContent.appendChild(equipmentSection);
    
    // Ajouter les éléments du matériel
    const reportItems = document.getElementById('reportItems');
    report.equipment.forEach(item => {
        const row = document.createElement('tr');
        row.className = 'border-t';
        row.innerHTML = `
            <td class="px-4 py-2">${item.name}</td>
            <td class="px-4 py-2">${item.category}</td>
            <td class="px-4 py-2">${item.location || 'N/A'}</td>
            <td class="px-4 py-2">${item.checked ? (item.quantity - (item.missing || 0)) + '/' + item.quantity : 'Non vérifié'}</td>
            <td class="px-4 py-2 ${item.checked ? (item.quantityOk ? 'text-green-600' : 'text-red-600') : 'text-gray-500'}">
                ${item.checked ? (item.quantityOk ? 'Conforme' : 'Non conforme') : '-'}
                ${item.note ? `<p class="text-xs text-gray-500 mt-1">${item.note}</p>` : ''}
            </td>
        `;
        reportItems.appendChild(row);
    });
    
    // Notes
    if(report.notes) {
        const notesSection = document.createElement('div');
        notesSection.className = 'mt-6 pt-4 border-t';
        notesSection.innerHTML = `
            <h4 class="font-semibold mb-2">Observations</h4>
            <p class="text-gray-700 whitespace-pre-line">${report.notes}</p>
        `;
        reportContent.appendChild(notesSection);
    }
    
    // Afficher le modal
    document.getElementById('reportModal').classList.remove('hidden');
}

function exportSingleReport() {
    alert("Fonctionnalité d'export PDF à implémenter");
    // Ici, on utiliserait une bibliothèque comme jsPDF pour générer un PDF
}

function printReport() {
    alert("Fonctionnalité d'impression à implémenter");
    // Ici, on pourrait utiliser window.print() avec un style dédié
}

function updateHistoryTable() {
    const historyTableBody = document.getElementById('historyTable');
    historyTableBody.innerHTML = ''; // Clear existing rows

    inspectionReports.forEach(report => {
        const row = document.createElement('tr');
        row.className = 'border-t';
        row.innerHTML = `
            <td class="px-4 py-2">${new Date(report.date).toLocaleDateString()} ${new Date(report.date).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</td>
            <td class="px-4 py-2">${report.vehicleId}</td>
            <td class="px-4 py-2">${report.inspector}</td>
            <td class="px-4 py-2">
                <button class="text-red-600 hover:text-red-800 view-report-btn" data-report-id="${report.id}">
                    <i class="fas fa-eye"></i> Voir
                </button>
            </td>
        `;
        historyTableBody.appendChild(row);
    });

    // Attach event listeners to the new view report buttons
    historyTableBody.querySelectorAll('.view-report-btn').forEach(button => {
        button.addEventListener('click', function() {
            viewReport(parseInt(this.dataset.reportId));
        });
    });
}

function viewReport(id) {
    const report = inspectionReports.find(r => r.id === parseInt(id));
    if(!report) return;
    
    // Mettre à jour le modal de rapport (similaire à exportReport)
    document.getElementById('reportTitle').textContent = `Rapport de vérification - ${report.vehicleId}`;
    
    const reportContent = document.getElementById('reportContent');
    reportContent.innerHTML = '';
    
    // En-tête du rapport
    const header = document.createElement('div');
    header.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
                <p class="text-sm text-gray-600">Véhicule</p>
                <p class="font-medium">${report.vehicleName}</p>
            </div>
            <div>
                <p class="text-sm text-gray-600">Date et heure</p>
                <p class="font-medium">${new Date(report.date).toLocaleString()}</p>
            </div>
            <div>
                <p class="text-sm text-gray-600">Rédacteur</p>
                <p class="font-medium">${report.inspector}</p>
            </div>
            <div>
                <p class="text-sm text-gray-600">Statut</p>
                <p class="font-medium ${report.completed ? 'text-green-600' : 'text-yellow-600'}">
                    ${report.completed ? 'COMPLET' : 'EN COURS'}
                </p>
            </div>
        </div>
    `;
    reportContent.appendChild(header);
    
    // Section du matériel
    const equipmentSection = document.createElement('div');
    equipmentSection.innerHTML = `
        <h4 class="font-semibold border-b pb-2 mb-3">Matériel vérifié</h4>
        <div class="overflow-x-auto">
            <table class="min-w-full">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="px-4 py-2 text-left">Équipement</th>
                        <th class="px-4 py-2 text-left">Catégorie</th>
                        <th class="px-4 py-2 text-left">Emplacement</th>
                        <th class="px-4 py-2 text-left">Quantité</th>
                        <th class="px-4 py-2 text-left">Statut</th>
                    </tr>
                </thead>
                <tbody id="reportItems">
                    <!-- Les éléments seront ajoutés dynamiquement -->
                </tbody>
            </table>
        </div>
    `;
    reportContent.appendChild(equipmentSection);
    
    // Ajouter les éléments du matériel
    const reportItems = reportContent.querySelector('#reportItems'); // Select from reportContent
    report.equipment.forEach(item => {
        const row = document.createElement('tr');
        row.className = 'border-t';
        row.innerHTML = `
            <td class="px-4 py-2">${item.name}</td>
            <td class="px-4 py-2">${item.category}</td>
            <td class="px-4 py-2">${item.location || 'N/A'}</td>
            <td class="px-4 py-2">${item.checked ? (item.quantity - (item.missing || 0)) + '/' + item.quantity : 'Non vérifié'}</td>
            <td class="px-4 py-2 ${item.checked ? (item.quantityOk ? 'text-green-600' : 'text-red-600') : 'text-gray-500'}">
                ${item.checked ? (item.quantityOk ? 'Conforme' : 'Non conforme') : '-'}
                ${item.note ? `<p class="text-xs text-gray-500 mt-1">${item.note}</p>` : ''}
            </td>
        `;
        reportItems.appendChild(row);
    });
    
    // Notes
    if(report.notes) {
        const notesSection = document.createElement('div');
        notesSection.className = 'mt-6 pt-4 border-t';
        notesSection.innerHTML = `
            <h4 class="font-semibold mb-2">Observations</h4>
            <p class="text-gray-700 whitespace-pre-line">${report.notes}</p>
        `;
        reportContent.appendChild(notesSection);
    }
    
    // Afficher le modal
    document.getElementById('reportModal').classList.remove('hidden');
}

// Fonctions d'administration
function manageEquipment() {
    document.getElementById('equipmentModal').classList.remove('hidden');
    updateEquipmentManagementList();
    // L'écouteur est attaché ici car le select est dans un modal qui peut être ouvert/fermé
    const vehicleTypeSelect = document.getElementById('vehicleTypeSelect');
    if (vehicleTypeSelect) {
        vehicleTypeSelect.removeEventListener('change', updateEquipmentManagementList); // Prevent multiple listeners
        vehicleTypeSelect.addEventListener('change', updateEquipmentManagementList);
    }
}

function updateEquipmentManagementList() {
    const vehicleType = document.getElementById('vehicleTypeSelect').value;
    const listElement = document.getElementById('equipmentManagementList');
    listElement.innerHTML = '';
    
    if(!equipmentData[vehicleType]) {
        equipmentData[vehicleType] = [];
    }
    
    equipmentData[vehicleType].forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'flex justify-between items-center bg-gray-50 p-3 rounded-lg';
        
        itemElement.innerHTML = `
            <div class="flex items-center space-x-4">
                ${item.image ? `
                <img src="${item.image}" alt="${item.name}" class="w-20 h-20 object-cover rounded-full cursor-pointer hover:opacity-80 transition-opacity image-thumbnail flex-shrink-0" data-image-url="${item.image}">
                ` : ''}
                <div class="flex-grow">
                    <h4 class="font-medium">${item.name}</h4>
                    <p class="text-sm text-gray-600">${item.category} - Quantité: ${item.quantity}</p>
                    ${item.location ? `<p class="text-sm text-gray-500">Emplacement: ${item.location}</p>` : ''}
                    ${item.documentation ? `
                        <a href="${item.documentation}" target="_blank" class="text-xs text-blue-600 hover:underline mt-1 inline-block">
                            <i class="fas fa-file-alt mr-1"></i> Documentation
                        </a>
                    ` : ''}
                </div>
                <div class="flex space-x-2 ml-auto">
                    <button class="p-1 text-blue-600 hover:text-blue-800 edit-equipment-btn" data-item-id="${item.id}" data-vehicle-type="${vehicleType}">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="p-1 text-red-600 hover:text-red-800 delete-equipment-btn" data-item-id="${item.id}" data-vehicle-type="${vehicleType}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
        
        listElement.appendChild(itemElement);
    });

    // Attach event listeners for dynamically created buttons
    listElement.querySelectorAll('.edit-equipment-btn').forEach(button => {
        button.addEventListener('click', function() {
            editEquipment(parseInt(this.dataset.itemId), this.dataset.vehicleType);
        });
    });
    listElement.querySelectorAll('.delete-equipment-btn').forEach(button => {
        button.addEventListener('click', function() {
            deleteEquipment(parseInt(this.dataset.itemId), this.dataset.vehicleType);
        });
    });
    listElement.querySelectorAll('.image-thumbnail').forEach(img => {
        img.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent parent button click if any
            showImagePopup(this.dataset.imageUrl);
        });
    });
}

function addNewEquipment() {
    document.getElementById('newEquipmentForm').classList.remove('hidden');
}

function cancelAddEquipment() {
    document.getElementById('newEquipmentForm').classList.add('hidden');
    // Réinitialiser les champs
    document.getElementById('newEquipmentName').value = '';
    document.getElementById('newEquipmentQuantity').value = '1';
    document.getElementById('newEquipmentCategory').value = '';
    document.getElementById('newEquipmentLocation').value = ''; // New: Reset location
    document.getElementById('newEquipmentImage').value = '';
    document.getElementById('newEquipmentDoc').value = '';
}

function confirmAddEquipment() {
    const vehicleType = document.getElementById('vehicleTypeSelect').value;
    const name = document.getElementById('newEquipmentName').value.trim();
    const quantity = parseInt(document.getElementById('newEquipmentQuantity').value) || 1;
    const category = document.getElementById('newEquipmentCategory').value.trim();
    const location = document.getElementById('newEquipmentLocation').value.trim(); // New: Get location
    
    if(!name) {
        alert("Veuillez entrer un nom pour l'équipement");
        return;
    }
    
    const newItem = {
        id: Date.now(),
        name: name,
        quantity: quantity,
        category: category || 'Général',
        location: location || 'Non spécifié', // New: Add location
        image: document.getElementById('newEquipmentImage').value.trim() || null,
        documentation: document.getElementById('newEquipmentDoc').value.trim() || null
    };
    
    // Ajouter au tableau approprié
    if(!equipmentData[vehicleType]) {
        equipmentData[vehicleType] = [];
    }
    
    equipmentData[vehicleType].push(newItem);
    
    // Sauvegarder dans localStorage
    localStorage.setItem('equipmentData', JSON.stringify(equipmentData));
    
    // Cacher le formulaire et mettre à jour la liste
    cancelAddEquipment();
    updateEquipmentManagementList();
    populateLocationFilterSelect(); // Update location filter options
}

function editEquipment(id, vehicleType) {
    const item = equipmentData[vehicleType].find(i => i.id === id);
    if(!item) return;
    
    // Dans une vraie application, on pourrait ouvrir un modal d'édition
    // Ici, on fait une simple modification via prompt()
    const newName = prompt("Nouveau nom:", item.name);
    if(newName !== null) {
        item.name = newName.trim();
        
        const newQuantity = prompt("Nouvelle quantité:", item.quantity);
        if(newQuantity !== null) {
            item.quantity = parseInt(newQuantity) || 1;
        }
        
        const newCategory = prompt("Nouvelle catégorie:", item.category);
        if(newCategory !== null) {
            item.category = newCategory.trim();
        }

        const newLocation = prompt("Nouvel emplacement:", item.location || ''); // New: Prompt for location
        if(newLocation !== null) {
            item.location = newLocation.trim() || 'Non spécifié';
        }

        const newImage = prompt("Nouvelle image (URL):", item.image || '');
        if(newImage !== null) {
            item.image = newImage.trim() || null;
        }

        const newDoc = prompt("Nouvelle documentation (URL):", item.documentation || '');
        if(newDoc !== null) {
            item.documentation = newDoc.trim() || null;
        }
        
        // Sauvegarder les modifications
        localStorage.setItem('equipmentData', JSON.stringify(equipmentData));
        updateEquipmentManagementList();
        populateLocationFilterSelect(); // Update location filter options
    }
}

function deleteEquipment(id, vehicleType) {
    if(confirm("Êtes-vous sûr de vouloir supprimer cet équipement ?")) {
        equipmentData[vehicleType] = equipmentData[vehicleType].filter(i => i.id !== id);
        localStorage.setItem('equipmentData', JSON.stringify(equipmentData));
        updateEquipmentManagementList();
        populateLocationFilterSelect(); // Update location filter options
    }
}

function manageVehicles() {
    document.getElementById('vehiclesModal').classList.remove('hidden');
    updateVehiclesList();
}

function updateVehiclesList() {
    const vehiclesList = document.getElementById('vehiclesList');
    vehiclesList.innerHTML = '';
    
    vehiclesData.forEach(vehicle => {
        const vehicleElement = document.createElement('div');
        vehicleElement.className = 'flex justify-between items-center bg-gray-50 p-3 rounded-lg';
        
        vehicleElement.innerHTML = `
            <div class="flex-grow">
                <h4 class="font-medium">${vehicle.id}</h4>
                <p class="text-sm text-gray-600">${vehicle.type} - ${vehicle.description}</p>
            </div>
            <div class="flex items-center space-x-2 ml-4">
                ${vehicle.image ? `
                <img src="${vehicle.image}" alt="${vehicle.description}" class="w-10 h-10 object-cover rounded-full cursor-pointer hover:opacity-80 transition-opacity image-thumbnail" data-image-url="${vehicle.image}">
                ` : ''}
                <button class="p-1 text-blue-600 hover:text-blue-800 edit-vehicle-btn" data-vehicle-id="${vehicle.id}">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="p-1 text-red-600 hover:text-red-800 delete-vehicle-btn" data-vehicle-id="${vehicle.id}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        
        vehiclesList.appendChild(vehicleElement);
    });

    // Attach event listeners for dynamically created buttons
    vehiclesList.querySelectorAll('.edit-vehicle-btn').forEach(button => {
        button.addEventListener('click', function() {
            editVehicle(this.dataset.vehicleId);
        });
    });
    vehiclesList.querySelectorAll('.delete-vehicle-btn').forEach(button => {
        button.addEventListener('click', function() {
            deleteVehicle(this.dataset.vehicleId);
        });
    });
    vehiclesList.querySelectorAll('.image-thumbnail').forEach(img => {
        img.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent parent button click if any
            showImagePopup(this.dataset.imageUrl);
        });
    });
}

function addNewVehicle() {
    document.getElementById('newVehicleForm').classList.remove('hidden');
}

function cancelAddVehicle() {
    document.getElementById('newVehicleForm').classList.add('hidden');
    // Réinitialiser les champs
    document.getElementById('newVehicleId').value = '';
    document.getElementById('newVehicleType').value = 'VSAV';
    document.getElementById('newVehicleDesc').value = '';
    document.getElementById('newVehicleImage').value = '';
}

function confirmAddVehicle() {
    const id = document.getElementById('newVehicleId').value.trim();
    const type = document.getElementById('newVehicleType').value;
    const description = document.getElementById('newVehicleDesc').value.trim();
    const image = document.getElementById('newVehicleImage').value.trim() || null;
    
    if(!id) {
        alert("Veuillez entrer un identifiant pour le véhicule");
        return;
    }
    
    if(!description) {
        alert("Veuillez entrer une description pour le véhicule");
        return;
    }
    
    // Vérifier si l'identifiant existe déjà
    if(vehiclesData.some(v => v.id === id)) {
        alert("Un véhicule avec cet identifiant existe déjà");
        return;
    }
    
    const newVehicle = {
        id,
        type,
        description,
        image
    };
    
    vehiclesData.push(newVehicle);
    
    // Sauvegarder dans localStorage
    localStorage.setItem('vehiclesData', JSON.stringify(vehiclesData));
    
    // Cacher le formulaire et mettre à jour la liste
    cancelAddVehicle();
    updateVehiclesList();
    renderVehicleCards(); // Update the main vehicle selection page
}

function editVehicle(id) {
    const vehicle = vehiclesData.find(v => v.id === id);
    if(!vehicle) return;
    
    // Dans une vraie application, on pourrait ouvrir un modal d'édition
    // Ici, on fait une simple modification via prompt()
    const newId = prompt("Nouvel identifiant:", vehicle.id);
    if(newId !== null && newId.trim()) {
        vehicle.id = newId.trim();
        
        const newType = prompt("Nouveau type (VSAV/FPT/EPA/VL):", vehicle.type);
        if(newType !== null && ['VSAV', 'FPT', 'EPA', 'VL'].includes(newType)) {
            vehicle.type = newType;
        }
        
        const newDesc = prompt("Nouvelle description:", vehicle.description);
        if(newDesc !== null) {
            vehicle.description = newDesc.trim();
        }

        const newImage = prompt("Nouvelle image (URL):", vehicle.image || '');
        if(newImage !== null) {
            vehicle.image = newImage.trim() || null;
        }
        
        // Sauvegarder les modifications
        localStorage.setItem('vehiclesData', JSON.stringify(vehiclesData));
        updateVehiclesList();
        renderVehicleCards(); // Update the main vehicle selection page
    }
}

function deleteVehicle(id) {
    if(confirm("Êtes-vous sûr de vouloir supprimer ce véhicule ?")) {
        vehiclesData = vehiclesData.filter(v => v.id !== id);
        localStorage.setItem('vehiclesData', JSON.stringify(vehiclesData));
        updateVehiclesList();
        renderVehicleCards(); // Update the main vehicle selection page
    }
}

function manageUsers() {
    document.getElementById('usersModal').classList.remove('hidden');
    updateUsersList();
}

function updateUsersList() {
    const usersList = document.getElementById('usersList');
    usersList.innerHTML = '';
    
    usersData.forEach(user => {
        const userElement = document.createElement('div');
        userElement.className = 'flex justify-between items-center bg-gray-50 p-3 rounded-lg';
        
        userElement.innerHTML = `
            <div class="flex items-center space-x-4">
                ${user.image ? `
                <img src="${user.image}" alt="${user.name}" class="w-20 h-20 object-cover rounded-full cursor-pointer hover:opacity-80 transition-opacity image-thumbnail flex-shrink-0" data-image-url="${user.image}">
                ` : ''}
                <div class="flex-grow">
                    <h4 class="font-medium">${user.name} (${user.id})</h4>
                    <p class="text-sm text-gray-600">Rôle: ${user.role}</p>
                </div>
                <div class="flex space-x-2 ml-auto">
                    <button class="p-1 text-blue-600 hover:text-blue-800 edit-user-btn" data-user-id="${user.id}">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="p-1 text-red-600 hover:text-red-800 delete-user-btn" data-user-id="${user.id}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
        
        usersList.appendChild(userElement);
    });

    // Attach event listeners for dynamically created buttons
    usersList.querySelectorAll('.edit-user-btn').forEach(button => {
        button.addEventListener('click', function() {
            editUser(this.dataset.userId);
        });
    });
    usersList.querySelectorAll('.delete-user-btn').forEach(button => {
        button.addEventListener('click', function() {
            deleteUser(this.dataset.userId);
        });
    });
    usersList.querySelectorAll('.image-thumbnail').forEach(img => {
        img.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent parent button click if any
            showImagePopup(this.dataset.imageUrl);
        });
    });
}

function addNewUser() {
    document.getElementById('newUserForm').classList.remove('hidden');
}

function cancelAddUser() {
    document.getElementById('newUserForm').classList.add('hidden');
    // Réinitialiser les champs
    document.getElementById('newUserId').value = '';
    document.getElementById('newUserName').value = '';
    document.getElementById('newUserRole').value = 'User';
    document.getElementById('newUserImage').value = '';
}

function confirmAddUser() {
    const id = document.getElementById('newUserId').value.trim();
    const name = document.getElementById('newUserName').value.trim();
    const role = document.getElementById('newUserRole').value;
    const image = document.getElementById('newUserImage').value.trim() || null;
    
    if(!id || !name) {
        alert("Veuillez entrer un identifiant et un nom pour l'utilisateur");
        return;
    }
    
    // Vérifier si l'identifiant existe déjà
    if(usersData.some(u => u.id === id)) {
        alert("Un utilisateur avec cet identifiant existe déjà");
        return;
    }
    
    const newUser = {
        id,
        name,
        role,
        image
    };
    
    usersData.push(newUser);
    
    // Sauvegarder dans localStorage
    localStorage.setItem('usersData', JSON.stringify(usersData));
    
    // Cacher le formulaire et mettre à jour la liste
    cancelAddUser();
    updateUsersList();
}

function editUser(id) {
    const user = usersData.find(u => u.id === id);
    if(!user) return;
    
    const newName = prompt("Nouveau nom:", user.name);
    if(newName !== null) {
        user.name = newName.trim();
        
        const newRole = prompt("Nouveau rôle (Admin/User):", user.role);
        if(newRole !== null && ['Admin', 'User'].includes(newRole)) {
            user.role = newRole;
        }

        const newImage = prompt("Nouvelle image (URL):", user.image || '');
        if(newImage !== null) {
            user.image = newImage.trim() || null;
        }
        
        // Sauvegarder les modifications
        localStorage.setItem('usersData', JSON.stringify(usersData));
        updateUsersList();
    }
}

function deleteUser(id) {
    if(confirm("Êtes-vous sûr de vouloir supprimer cet utilisateur ?")) {
        usersData = usersData.filter(u => u.id !== id);
        localStorage.setItem('usersData', JSON.stringify(usersData));
        updateUsersList();
    }
}

// Fonctions pour l'affichage de l'image en plein écran
function showImagePopup(imageUrl) {
    const imageViewerModal = document.getElementById('imageViewerModal');
    const fullScreenImage = document.getElementById('fullScreenImage');
    fullScreenImage.src = imageUrl;
    imageViewerModal.classList.remove('hidden');
}

function closeImagePopup() {
    document.getElementById('imageViewerModal').classList.add('hidden');
    document.getElementById('fullScreenImage').src = ''; // Effacer la source de l'image
}
