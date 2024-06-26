declare global {
	namespace Ports {
		namespace AuthEntity {
			// Driven-side representation. From/to DB
			namespace Source {
				interface MariaDB {
					id: string;
					crid: string;
					secret_hash: string;
				}
			}

			// The agreement between the two
			// This is the one we'll use inside the service
			interface Middle {
				id: string;
				secretHash: string;
				resource: Ports.Resource.Middle;
			}

			// Driving-side representation. From/to gRPC
			namespace Presentation {
				interface gRPC {
					id: string;
					secret_hash?: string;
					resource: Ports.Resource.Presentation.gRPC;
				}
			}
		}
	}
}

export {};
